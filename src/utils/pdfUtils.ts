// src/utils/pdfUtils.ts
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';

// Define proper types for jsPDF-autotable
interface AutoTableColumn {
  header?: string;
  dataKey?: string | number;
  title?: string;
  key?: string;
  width?: number;
}

// Define the allowed text alignments and vertical alignments
type HorizontalAlignment = 'left' | 'center' | 'right' | 'justify';
type VerticalAlignment = 'top' | 'middle' | 'bottom';

// Define possible overflow behaviors
type OverflowType = 'linebreak' | 'ellipsize' | 'visible' | 'hidden';

// Define options for specific columns
interface AutoTableColumnOption {
  [columnNumber: number]: {
    cellWidth?: number;
    minCellWidth?: number;
    maxCellWidth?: number;
    fontStyle?: 'normal' | 'bold' | 'italic' | 'bolditalic';
    halign?: HorizontalAlignment;
    valign?: VerticalAlignment;
    fillColor?: number[] | false;
    textColor?: number[] | false;
    cellPadding?: number;
  };
}

// Define common style properties
interface AutoTableStyles {
  font?: string;
  fontStyle?: 'normal' | 'bold' | 'italic' | 'bolditalic';
  overflow?: OverflowType;
  fillColor?: number[] | false;
  textColor?: number[] | false;
  halign?: HorizontalAlignment;
  valign?: VerticalAlignment;
  lineColor?: number[];
  lineWidth?: number;
  cellPadding?: number;
  cellWidth?: number | 'auto' | 'wrap';
  minCellHeight?: number;
  minCellWidth?: number;
  maxCellWidth?: number;
  fontSize?: number;
}

// Define page margin options
interface PageMargin {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

// Define cell hook data
interface CellHookData {
  table: {
    startY: number;
    head: Array<unknown[]>;
    body: Array<unknown[]>;
    foot: Array<unknown[]>;
    columns: AutoTableColumn[];
  };
  cursor: {
    x: number;
    y: number;
  };
  row: {
    index: number;
    raw: unknown;
  };
  column: {
    index: number;
    dataKey: string | number;
    raw: unknown;
  };
  cell: {
    text: string[];
    width: number;
    height: number;
    styles: AutoTableStyles;
    textPos: {
      x: number;
      y: number;
    };
  };
  section: 'head' | 'body' | 'foot';
}

// Define page hook data
interface PageHookData {
  cursor: {
    x: number;
    y: number;
  };
  pageNumber: number;
  pageSize: {
    width: number;
    height: number;
  };
  pageCount: number;
}

// Define the complete options for AutoTable
interface AutoTableOptions {
  head?: Array<string[] | Record<string, string | number>[]>;
  body?: Array<string[] | Record<string, string | number>[]>;
  foot?: Array<string[] | Record<string, string | number>[]>;
  columns?: AutoTableColumn[];
  startY?: number;
  margin?: PageMargin;
  pageBreak?: 'auto' | 'avoid' | 'always';
  rowPageBreak?: 'auto' | 'avoid';
  tableWidth?: 'auto' | 'wrap' | number;
  showHead?: 'everyPage' | 'firstPage' | 'never';
  showFoot?: 'everyPage' | 'lastPage' | 'never';
  tableLineWidth?: number;
  tableLineColor?: number | number[];
  styles?: AutoTableStyles;
  headStyles?: AutoTableStyles;
  bodyStyles?: AutoTableStyles;
  footStyles?: AutoTableStyles;
  alternateRowStyles?: AutoTableStyles;
  columnStyles?: AutoTableColumnOption;
  theme?: 'striped' | 'grid' | 'plain';
  horizontalPageBreak?: boolean;
  horizontalPageBreakRepeat?: number | string;
  didParseCell?: (data: CellHookData) => void;
  didDrawCell?: (data: CellHookData) => void;
  didDrawPage?: (data: PageHookData) => void;
}

// Add the type definition for jsPDF with autoTable
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: AutoTableOptions) => jsPDF;
    lastAutoTable?: {
      finalY: number;
    };
  }
}

// Interface for bill breakdown item
interface BillBreakdownItem {
  description: string;
  amount: number;
}

// Interface for last payment info
interface LastPayment {
  amount: number;
  date: string;
}

// Interface for bill data
interface BillData {
  billNumber: string;
  billDate: string;
  dueDate: string;
  customerName: string;
  billAmount: number;
  connectionAddress?: string;
  billPeriod?: string;
  billerName: string;
  billBreakdown?: BillBreakdownItem[];
  lastPayment?: LastPayment;
  billStatus?: "Unpaid" | "Paid" | "Overdue";
}

// Interface for receipt data
interface ReceiptData {
  transactionId: string;
  transactionDate: string;
  amount: number;
  paymentMethod: string;
  receiptNumber: string;
  billerName: string;
  customerName: string;
  billNumber: string;
}

/**
 * Format address into multiple lines for better PDF display
 * @param address Full address string
 * @param maxCharsPerLine Maximum characters per line
 * @returns Array of address lines
 */
function formatAddress(address: string, maxCharsPerLine: number = 40): string[] {
  if (!address) return ['N/A'];
  
  // Split by commas first
  const parts = address.split(',');
  const lines: string[] = [];
  let currentLine = '';
  
  for (const part of parts) {
    const trimmedPart = part.trim();
    
    if (currentLine.length + trimmedPart.length + 2 <= maxCharsPerLine) {
      // Can fit on current line
      currentLine = currentLine ? `${currentLine}, ${trimmedPart}` : trimmedPart;
    } else {
      // Start a new line
      if (currentLine) lines.push(currentLine);
      currentLine = trimmedPart;
    }
  }
  
  // Add the last line if not empty
  if (currentLine) lines.push(currentLine);
  
  return lines;
}

/**
 * Format currency with rupee symbol
 * @param amount Number to format
 * @returns Formatted currency string
 */
function formatCurrency(amount: number): string {
  // Use the Unicode character for Indian Rupee symbol
  // We'll add "Rs. " as a fallback in case the symbol doesn't render
  return `Rs. ${amount.toLocaleString()}`;
}

/**
 * Generate a bill PDF for download
 * @param billData The bill data to include in the PDF
 */
/**
 * Generate a bill PDF for download
 * @param billData The bill data to include in the PDF
 */
export const generateBillPDF = (billData: BillData): void => {
  try {
    // Create a new PDF document
    const doc = new jsPDF();
    
    // Add BharatConnect logo at top right using PNG image
    doc.addImage('/bharatConnect.png', 'PNG', 150, 5, 40, 15);
    
    // Bill title
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('BILL INVOICE', 14, 22);
    
    // Add a line
    doc.setDrawColor(81, 80, 139);
    doc.setLineWidth(0.5);
    doc.line(14, 25, 196, 25);
    
    // Format the address into multiple lines
    const addressLines = formatAddress(billData.connectionAddress || '');
    
    // Customer information
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text('Bill To:', 14, 35);
    doc.setFontSize(9);
    doc.text(billData.customerName || 'Customer Name', 14, 40);
    
    // Print address lines
    let currentY = 40;
    for (const line of addressLines) {
      currentY += 5;
      doc.text(line, 14, currentY);
    }
    
    // Bill Details
    doc.setFontSize(10);
    doc.text('Bill Details:', 120, 35);
    doc.setFontSize(9);
    doc.text(`Bill Number: ${billData.billNumber || 'N/A'}`, 120, 40);
    doc.text(`Bill Date: ${billData.billDate || 'N/A'}`, 120, 45);
    doc.text(`Due Date: ${billData.dueDate || 'N/A'}`, 120, 50);
    doc.text(`Bill Period: ${billData.billPeriod || 'N/A'}`, 120, 55);
    
    // Add biller name
    doc.text(`Biller: ${billData.billerName || 'Service Provider'}`, 14, currentY + 10);
    
    // Bill breakdown table
    if (billData.billBreakdown && billData.billBreakdown.length > 0) {
      const tableData = billData.billBreakdown.map((item) => [
        item.description, 
        formatCurrency(item.amount)
      ]);
      
      // Calculate total amount
      const totalAmount = billData.billBreakdown.reduce(
        (sum, item) => sum + item.amount, 0
      );
      
      autoTable(doc,{
        startY: Math.max(currentY + 15, 70),
        head: [['Description', 'Amount']],
        body: tableData,
        theme: 'striped',
        styles: {
          fontSize: 9
        },
        headStyles: { 
          fillColor: [81, 80, 139],
          textColor: [255, 255, 255],
          fontSize: 10
        },
        foot: [['Total Amount', formatCurrency(billData.billAmount ? billData.billAmount : totalAmount)]],
        footStyles: { 
          fillColor: [240, 240, 240],
          textColor: [0, 0, 0],
          fontStyle: 'bold',
          fontSize: 10
        }
      });
    }
    
    // Get the final Y position after the table (or use default if no table)
    const finalY = (doc.lastAutoTable && typeof doc.lastAutoTable.finalY === 'number')
      ? doc.lastAutoTable.finalY + 10
      : 140;
    
    // Add terms and notes
    doc.setFontSize(9);
    doc.text('Notes:', 14, finalY);
    doc.setFontSize(8);
    doc.text('1. Please pay your bill before the due date to avoid late payment charges.', 14, finalY + 5);
    doc.text('2. For any queries, please contact customer support.', 14, finalY + 10);
    
    // Add footer
    doc.setFontSize(7);
    doc.setTextColor(128, 128, 128);
    doc.text('This is a system generated bill and does not require signature.', 105, 280, { align: 'center' });
    doc.text('© BharatConnect 2025', 105, 285, { align: 'center' });
    
    // Save the PDF
    doc.save(`BharatConnect_Bill_${billData.billNumber || 'Invoice'}.pdf`);
  } catch (error) {
    console.error('Error generating bill PDF:', error);
    throw error;
  }
};

/**
 * Generate a payment receipt PDF for download
 * @param receiptData The receipt data to include in the PDF
 */
/**
 * Generate a payment receipt PDF for download
 * @param receiptData The receipt data to include in the PDF
 */
export const generateReceiptPDF = (receiptData: ReceiptData): void => {
  try {
    // Create a new PDF document
    const doc = new jsPDF();
    
    // Add BharatConnect logo at top right using PNG image
    doc.addImage('/bharatConnect.png', 'PNG', 150, 5, 40, 15);
    
    // Receipt title
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('PAYMENT RECEIPT', 14, 22);
    
    // Add a line
    doc.setDrawColor(81, 80, 139);
    doc.setLineWidth(0.5);
    doc.line(14, 25, 196, 25);
    
    // Add success icon (simulated with text)
    doc.setFontSize(12);
    doc.setTextColor(76, 175, 80); // Green color
    doc.text('Payment Successful', 105, 40, { align: 'center' });
    
    // Receipt information in a table format
    const receiptDetails = [
      ['Transaction ID:', receiptData.transactionId || 'N/A'],
      ['Date & Time:', receiptData.transactionDate || 'N/A'],
      ['Amount Paid:', formatCurrency(receiptData.amount)],
      ['Payment Method:', receiptData.paymentMethod || 'N/A'],
      ['Receipt Number:', receiptData.receiptNumber || 'N/A'],
      ['Biller Name:', receiptData.billerName || 'N/A'],
      ['Customer Name:', receiptData.customerName || 'N/A'],
      ['Bill Number:', receiptData.billNumber || 'N/A']
    ];
    
    autoTable(doc,{
      startY: 45,
      theme: 'plain',
      body: receiptDetails,
      styles: { 
        cellPadding: 2,
        fontSize: 9
      },
      columnStyles: { 
        0: { 
          cellWidth: 40, 
          fontStyle: 'bold'
        }
      }
    });
    
    // Get the final Y position after the table
    const finalY = doc.lastAutoTable?.finalY 
      ? doc.lastAutoTable.finalY + 10 
      : 100;
    
    // Add payment confirmation
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text('This is to certify that the payment has been successfully processed.', 105, finalY, { align: 'center' });
    
    // Add terms and notes
    doc.setFontSize(9);
    doc.text('Notes:', 14, finalY + 15);
    doc.setFontSize(8);
    doc.text('1. This is an official receipt for your payment.', 14, finalY + 20);
    doc.text('2. Please keep this receipt for your records.', 14, finalY + 25);
    doc.text('3. For any queries, please contact customer support.', 14, finalY + 30);
    
    // Add footer with company details
    doc.setLineWidth(0.1);
    doc.line(14, 260, 196, 260);
    
    doc.setFontSize(7);
    doc.setTextColor(128, 128, 128);
    doc.text('This is a system generated receipt and does not require signature.', 105, 270, { align: 'center' });
    doc.text('© BharatConnect 2025', 105, 275, { align: 'center' });
    
    // Save the PDF
    doc.save(`BharatConnect_Receipt_${receiptData.transactionId || 'Payment'}.pdf`);
  } catch (error) {
    console.error('Error generating receipt PDF:', error);
    throw error;
  }
};