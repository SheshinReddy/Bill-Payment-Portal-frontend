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
 * Generate a bill PDF for download
 * @param billData The bill data to include in the PDF
 */
export const generateBillPDF = (billData: BillData): void => {
  try {
    // Create a new PDF document
    const doc = new jsPDF();
    
    // Add logo/header
    doc.setFontSize(20);
    doc.setTextColor(81, 80, 139); // Primary color
    doc.text('BharatConnect', 105, 20, { align: 'center' });
    
    // Bill title
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('BILL INVOICE', 105, 30, { align: 'center' });
    
    // Add a line
    doc.setDrawColor(81, 80, 139);
    doc.setLineWidth(0.5);
    doc.line(14, 35, 196, 35);
    
    // Customer information
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text('Bill To:', 14, 45);
    doc.setFontSize(11);
    doc.text(billData.customerName || 'Customer Name', 14, 52);
    doc.text(billData.connectionAddress || 'Address', 14, 59);
    
    // Bill Details
    doc.setFontSize(12);
    doc.text('Bill Details:', 120, 45);
    doc.setFontSize(11);
    doc.text(`Bill Number: ${billData.billNumber || 'N/A'}`, 120, 52);
    doc.text(`Bill Date: ${billData.billDate || 'N/A'}`, 120, 59);
    doc.text(`Due Date: ${billData.dueDate || 'N/A'}`, 120, 66);
    doc.text(`Bill Period: ${billData.billPeriod || 'N/A'}`, 120, 73);
    
    // Add biller name
    doc.text(`Biller: ${billData.billerName || 'Service Provider'}`, 14, 73);
    
    // Bill breakdown table
    if (billData.billBreakdown && billData.billBreakdown.length > 0) {
      const tableData = billData.billBreakdown.map((item) => [
        item.description, 
        `₹${item.amount.toLocaleString()}`
      ]);
      
      // Calculate total amount
      const totalAmount = billData.billBreakdown.reduce(
        (sum, item) => sum + item.amount, 0
      );
      
      autoTable(doc,{
        startY: 85,
        head: [['Description', 'Amount']],
        body: tableData,
        theme: 'striped',
        headStyles: { 
          fillColor: [81, 80, 139],
          textColor: [255, 255, 255]
        },
        foot: [['Total Amount', `₹${billData.billAmount ? billData.billAmount.toLocaleString() : totalAmount.toLocaleString()}`]],
        footStyles: { 
          fillColor: [240, 240, 240],
          textColor: [0, 0, 0],
          fontStyle: 'bold'
        }
      });
    }
    
    // Get the final Y position after the table (or use default if no table)
    const finalY = (doc.lastAutoTable && typeof doc.lastAutoTable.finalY === 'number')
  ? doc.lastAutoTable.finalY + 10
  : 150;
    
    // Add terms and notes
    doc.setFontSize(10);
    doc.text('Notes:', 14, finalY);
    doc.setFontSize(9);
    doc.text('1. Please pay your bill before the due date to avoid late payment charges.', 14, finalY + 7);
    doc.text('2. For any queries, please contact customer support.', 14, finalY + 14);
    
    // Add footer
    doc.setFontSize(8);
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
export const generateReceiptPDF = (receiptData: ReceiptData): void => {
  try {
    // Create a new PDF document
    const doc = new jsPDF();
    
    // Add logo/header
    doc.setFontSize(20);
    doc.setTextColor(81, 80, 139); // Primary color
    doc.text('BharatConnect', 105, 20, { align: 'center' });
    
    // Receipt title
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('PAYMENT RECEIPT', 105, 30, { align: 'center' });
    
    // Add a line
    doc.setDrawColor(81, 80, 139);
    doc.setLineWidth(0.5);
    doc.line(14, 35, 196, 35);
    
    // Add success icon (simulated with text)
    doc.setFontSize(14);
    doc.setTextColor(76, 175, 80); // Green color
    doc.text('✓ Payment Successful', 105, 50, { align: 'center' });
    
    // Receipt information in a table format
    const receiptDetails = [
      ['Transaction ID:', receiptData.transactionId || 'N/A'],
      ['Date & Time:', receiptData.transactionDate || 'N/A'],
      ['Amount Paid:', `₹${receiptData.amount ? receiptData.amount.toLocaleString() : 'N/A'}`],
      ['Payment Method:', receiptData.paymentMethod || 'N/A'],
      ['Receipt Number:', receiptData.receiptNumber || 'N/A'],
      ['Biller Name:', receiptData.billerName || 'N/A'],
      ['Customer Name:', receiptData.customerName || 'N/A'],
      ['Bill Number:', receiptData.billNumber || 'N/A']
    ];
    
    autoTable(doc,{
      startY: 60,
      theme: 'plain',
      body: receiptDetails,
      styles: { 
        cellPadding: 3,
        fontSize: 11
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
  ? doc.lastAutoTable.finalY + 15 
  : 100;
    
    // Add payment confirmation
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text('This is to certify that the payment has been successfully processed.', 105, finalY, { align: 'center' });
    
    // Add terms and notes
    doc.setFontSize(10);
    doc.text('Notes:', 14, finalY + 20);
    doc.setFontSize(9);
    doc.text('1. This is an official receipt for your payment.', 14, finalY + 27);
    doc.text('2. Please keep this receipt for your records.', 14, finalY + 34);
    doc.text('3. For any queries, please contact customer support.', 14, finalY + 41);
    
    // Add footer with company details
    doc.setLineWidth(0.1);
    doc.line(14, 260, 196, 260);
    
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text('This is a system generated receipt and does not require signature.', 105, 270, { align: 'center' });
    doc.text('© BharatConnect 2025', 105, 275, { align: 'center' });
    
    // Save the PDF
    doc.save(`BharatConnect_Receipt_${receiptData.transactionId || 'Payment'}.pdf`);
  } catch (error) {
    console.error('Error generating receipt PDF:', error);
    console.log(error);
    throw error;
  }
};