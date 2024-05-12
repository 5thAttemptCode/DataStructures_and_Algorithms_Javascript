// CASE
// Optimizing Search in a Large Dataset
// We aredeveloping an e-commerce website where users can search for products.
// There is a large dataset containing many products. When a user enters a search query
// our code code needs to find relevant products efficiently.
// BigO steps: 1. Linear Search
//             2. Optimizing Data Structures
//             3. Indexing


// Define a class for products
class Product {
    constructor(id, name, category, price) {
      this.id = id
      this.name = name
      this.category = category
      this.price = price
    }
  }
  
  // Define a class for the product catalog
  class ProductCatalog {
    constructor() {
      this.products = []
      this.indexes = {
        // Indexes for optimized search
        name: {},
        category: {}
      }
    }
  
    // Method to add a product to the catalog
    addProduct(product) {
      this.products.push(product)
  
      // Update indexes
      if (!this.indexes.name[product.name]) {
        this.indexes.name[product.name] = []
      }
      this.indexes.name[product.name].push(product)
  
      if (!this.indexes.category[product.category]) {
        this.indexes.category[product.category] = []
      }
      this.indexes.category[product.category].push(product)
    }
  
    // Method to search products by name using index
    searchByName(name) {
      if (this.indexes.name[name]) {
        return this.indexes.name[name]
      } else {
        return []
      }
    }
  
    // Method to search products by category using index
    searchByCategory(category) {
      if (this.indexes.category[category]) {
        return this.indexes.category[category]
      } else {
        return []
      }
    }
  
    // Method to perform a binary search on sorted products array
    binarySearchByName(name) {
      let sortedProducts = this.products.slice().sort((a, b) => a.name.localeCompare(b.name))
      let left = 0
      let right = sortedProducts.length - 1
  
      while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (sortedProducts[mid].name === name) {
          return sortedProducts[mid]
        } else if (sortedProducts[mid].name < name) {
          left = mid + 1
        } else {
          right = mid - 1
        }
      }
      return null
    }
  }
  
  // Create a product catalog instance
  const catalog = new ProductCatalog()
  
  // Add some sample products to the catalog
  catalog.addProduct(new Product(1, "iPhone 15", "Electronics", 999))
  catalog.addProduct(new Product(2, "Samsung Galaxy S21", "Electronics", 799))
  catalog.addProduct(new Product(3, "Huawei MateBook D15", "Electronics", 1299))
  catalog.addProduct(new Product(4, "Nike Air Max TN", "Fashion", 190))
  
  // Perform searches
  console.log("Search by name: iPhone 15")
  console.log(catalog.searchByName("iPhone 15"))
  
  console.log("\nSearch by category: Electronics")
  console.log(catalog.searchByCategory("Electronics"))
  
  console.log("\nBinary search by name: Samsung Galaxy S21")
  console.log(catalog.binarySearchByName("Samsung Galaxy S21"))
  