import { allServices, billerType } from "../data/globalData";

/**
 * Find a biller by its ID and category
 * @param billerId The URL-friendly biller ID
 * @param category The service category
 * @returns The biller object or undefined if not found
 */
export const findBillerByIdAndCategory = (
  billerId: string,
  category: string
): billerType | undefined => {
  for (const categoryItem of allServices) {
    for (const service of categoryItem.categoryServices) {
      if (service.serviceName.toLowerCase() === category.toLowerCase()) {
        const foundBiller = service.serviceBillers?.find(
          (biller) =>
            encodeURIComponent(biller.billerName.toLowerCase().replace(/\s+/g, "-")) ===
            billerId
        );

        if (foundBiller) {
          return foundBiller;
        }
      }
    }
  }
  return undefined;
};

/**
 * Get all billers for a specific service category
 * @param category The service category
 * @returns Array of billers for the category
 */
export const getBillersByCategory = (
  category: string
): billerType[] => {
  for (const categoryItem of allServices) {
    for (const service of categoryItem.categoryServices) {
      if (service.serviceName.toLowerCase() === category.toLowerCase()) {
        return service.serviceBillers || [];
      }
    }
  }
  return [];
};