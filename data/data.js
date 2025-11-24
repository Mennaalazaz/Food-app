// Dummy data for testing purposes
const DATA = {
  users: [
    { id: 1, username: "menna123", email: "menna@gmail.com", password: "hashed", address: "Smouha, Alexandria" },
    { id: 2, username: "malak", email: "malak@yahoo.com", password: "hashed", address: "Louran, Alexandria" },
    { id: 3, username: "Hania", email: "hania7@mail.com", password: "hashed", address: "Gleem, Alexandria" },
    { id: 4, username: "samir", email: "samir@gmail.com", password: "hashed", address: "Stanley, Alexandria" },
    { id: 5, username: "noor", email: "noor@hotmail.com", password: "hashed", address: "Miami, Alexandria" },
    { id: 6, username: "yasmine", email: "yasmine@gmail.com", password: "hashed", address: "Roushdy, Alexandria" },
    { id: 7, username: "sara", email: "sara@yahoo.com", password: "hashed", address: "Mandara, Alexandria" },
    { id: 8, username: "Noureen", email: "noureen@mail.com", password: "hashed", address: "Camp Caesar, Alexandria" },
    { id: 9, username: "rania", email: "rania@gmail.com", password: "hashed", address: "Sporting, Alexandria" },
    { id: 10, username: "khaled", email: "khaled@gmail.com", password: "hashed", address: "San Stefano, Alexandria" },
    { id: 11, username: "Nour", email: "nour@gmail.com", password: "hashed", address: "Stanley, Alexandria" },
    { id: 12, username: "tamer", email: "tamer@gmail.com", password: "hashed", address: "Louran, Alexandria" }
  ],

  restaurants: [
    { id: 1, name: "Balbaa Village", email: "info@balbaa.com", phone: "01234567890", address: "Sidi Gaber, Alexandria", logoURL: "https://images.deliveryhero.io/image/talabat/restaurants/Screenshot_20250722_at_11638887956754798098.jpg?width=180", foods: ["Grill","Seafood"], delivery: true, pickup: true, isOpen: true, rating: 4.7 },
    { id: 2, name: "Hosny Restaurant", email: "contact@hosny.com", phone: "01122334455", address: "Miami, Alexandria", logoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtCQliT_MoI2QBBJ9LKZD_EhIyBPR7EZUk4A&s", foods: ["Grill"], delivery: true, pickup: true, isOpen: true, rating: 4.5 },
    {id: 3, name: "Abdel Rahim Koueider", email: "Koueider@gmail.com",phone: "01234567896", address: "San Stefano, Alexandria", logoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZdSZCxe19tjJyD5hGN22U_bBhJ5FSzw3RQ&s", foods: ["Coffee","Bakery","desserts"], delivery: true, pickup: true, isOpen: true, rating: 4.5 },
    { id: 4, name: "Chicken Fil-Alex", email: "info@filalex.com", phone: "01033221144", address: "Smoha, Alexandria", logoURL: "https://images.deliveryhero.io/image/talabat/restaurants/WhatsApp_Image_20240219_a638439456399711194.jpeg?width=180", foods: ["Chicken","Sandwiches"], delivery: true, pickup: true, isOpen: true, rating: 4.3 },
    {id: 5, name: "el baraka", email: "elbaraka@gmail.com", phone: "01234567895", address: "San Stefano, Alexandria", logoURL: "https://images.deliveryhero.io/image/talabat/restaurants/logo_(1)_636959664318073364.jpg?width=180", foods: ["Chicken"], delivery: true, pickup: true, isOpen: true, rating: 4.7 },
    { id: 6, name: "Buffalo Burger", email: "buffalo@burger.com", phone: "01011122334", address: "San Stefano, Alexandria", logoURL: "https://images.deliveryhero.io/image/talabat/restaurants/Logo_1638421418735242644.jpg?width=180", foods: ["Burger"], delivery: true, pickup: false, isOpen: true, rating: 4.2 },
    { id: 7, name: "Seagull Fish", email: "sea@fish.com", phone: "01200998877", address: "Mandara, Alexandria", logoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41m8XgP4P6Yg7w0qdVkIwYthlk6xiXcAR5dBTkVMrCd_BzvXGqTgGo7CJBLaWSmFobOs&usqp=CAU", foods: ["Seafood"], delivery: true, pickup: true, isOpen: true, rating: 4.4 },
    { id: 8, name: "TBS Bakery", email: "tbs@bakery.com", phone: "01090909090", address: "Gleem, Alexandria", logoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhHplS-BG5_igmCQ3mKozy67qGrLkpSi2KQ&s", foods: ["Bakery","Coffee"], delivery: true, pickup: true, isOpen: true, rating: 4.5 },
    { id: 9, name: "Popeyes", email: "popeyes@alx.com", phone: "01177889900", address: "Miami, Alexandria", logoURL: "https://images.deliveryhero.io/image/talabat/restaurants/newLogo_637369060956119245.jpg?width=180", foods: ["Chicken"], delivery: true, pickup: false, isOpen: true, rating: 4.1 },
    { id: 10, name: "Hardee's", email: "hardees@alx.com", phone: "01222334455", address: "Sporting, Alexandria", logoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9DWK37nz_xSf9VqzKQV5CQU4ZPkQf1DcwFg&s", foods: ["Fast Food"], delivery: true, pickup: true, isOpen: true, rating: 4.0 },
    { id: 11, name: "Pizza Hut", email: "pizzahut@alx.com", phone: "01011122233", address: "Gleem, Alexandria", logoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxtndxD7h-5N6odsNbQdkKsTdrnLocuaqtA&s", foods: ["Pizza"], delivery: true, pickup: true, isOpen: true, rating: 4.2 },
    { id: 12, name: "Domino's Pizza", email: "dominos@alx.com", phone: "01233445566", address: "Miami, Alexandria", logoURL: "https://images.deliveryhero.io/image/talabat/restaurants/EnglishVertical_page0001638408595762831730.jpg?width=180", foods: ["Pizza"], delivery: true, pickup: true, isOpen: true, rating: 4.1 },
    { id: 13, name: "Koshary El Tahrir", email: "koshary@elTahrir.com", phone: "01012345678", address: "Sidi Gaber, Alexandria", logoURL: "https://images.deliveryhero.io/image/talabat/restaurants/logo637878998633245560.jpg?width=180", foods: ["Koshary"], delivery: true, pickup: true, isOpen: true, rating: 4.6 },
    { id: 14, name: "Fuddruckers", email: "fudd@alx.com", phone: "01122335544", address: "San Stefano, Alexandria", logoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhe4yfiKVXJHMTJmTIHroJipjz0eVT-hH9Vg&s", foods: ["Burger"], delivery: true, pickup: true, isOpen: true, rating: 4.3 },
    {id:  15, name: "5 roosters", email: "roaster5@gmail.com", phone: "01234567894", address: "San Stefano, Alexandria", logoURL: "https://images.deliveryhero.io/image/talabat/restaurants/WhatsApp_Image_20230430_a638435908255719601.jpeg?width=180", foods: ["Chicken","Fast Food"], delivery: true, pickup: true, isOpen: true, rating: 4.4 },
    { id: 16, name: "Sushi King", email: "sushi@alx.com", phone: "01233441122", address: "Stanley, Alexandria", logoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2W0pgbp-Lp51bdSzz6PRhiLcyy-n1Cfguw&s", foods: ["Sushi","Asian"], delivery: true, pickup: true, isOpen: true, rating: 4.5 },
    { id: 17, name: "McDonald's", email: "mcdonalds@alx.com", phone: "01055667788", address: "Mandara, Alexandria", logoURL: "https://media.licdn.com/dms/image/v2/C4D0BAQFQKB--RSCDcA/company-logo_200_200/company-logo_200_200/0/1630462730357?e=2147483647&v=beta&t=9Du4PQzXeNbjyFX-oomjRavwN058pLfPecwLqRRRDhs", foods: ["Fast Food"], delivery: true, pickup: true, isOpen: true, rating: 4.2 },
    { id: 18, name: "Kababgy", email: "kababgy@alx.com", phone: "01133445566", address: "Sporting, Alexandria", logoURL: "https://images.deliveryhero.io/image/talabat/restaurants/logo__20220604T191845878637899599766511724.jpg?width=180", foods: ["Grill"], delivery: true, pickup: true, isOpen: true, rating: 4.6 },
    { id: 19, name: "Sultana Ice Cream", email: "Sultana@alx.com", phone: "01222334455", address: "Gleem, Alexandria", logoURL: "https://forasna-images.wuzzuf-data.net/uploads/logos/clogo_2019-01-09-16-16-03_rtRuxu6qOcd8BtWcXnUktAXX.jpg", foods: ["Desserts"], delivery: true, pickup: true, isOpen: true, rating: 4.5 },
    { id: 20, name: "Coffee Corner", email: "coffee@alx.com", phone: "01012349876", address: "Sidi Gaber, Alexandria", logoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2R6_dzkEFabWpZXQZqcZAtiYMfqkbX_OjQ&s", foods: ["Coffee","Bakery"], delivery: true, pickup: true, isOpen: true, rating: 4.4 },
    { id: 21, name: "StarBucks", email: "starbucks@alx.com", phone: "01099887766", address: "Sidi Gaber, Alexandria", logoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbcgkdTelJltCNwRGDKPiEZYmMsPxe5Y9qUw&s", foods: ["Coffee","Bakery"], delivery: true, pickup: true, isOpen: true, rating: 4.7 },
    {id: 22, name: "La Poire", email: "lapoire@gmail.com", phone: "01234567891", address: "San Stefano, Alexandria", logoURL: "https://www.men-masr.com/cdn/shop/files/La_poire-Mixed_Oriental_Sweets_2.jpg?v=1745818800&width=1445", foods: ["Bakery","Desserts"], delivery: true, pickup: true, isOpen: true, rating: 4.8 },
    { id: 23, name: "sale sucre", email: "sale@sucre.com", phone: "01234567892", address: "San Stefano, Alexandria", logoURL: "https://play-lh.googleusercontent.com/gdOElXZDMzXqSj0ErEIQLLQr-uZr-h0QF1iE8GT227DVN_pWZkcilVWDmQDjNWIdDSVg", foods: ["Bakery","Desserts"], delivery: true, pickup: true, isOpen: true, rating: 4.3 },
    {id: 24, name: "el saidy patisserie", email: "elsaidy@gmail.com", phone: "01234567893", address: "San Stefano, Alexandria", logoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuj2jw4iWrEM4QX5MDJC6NAA2X6R479ZHWmw&s", foods: ["Bakery","Desserts"], delivery: true, pickup: true, isOpen: true, rating: 4.6 },
  ],

categories: [
  { id: 1, name: "Grill" },            
  { id: 2, name: "Seafood" },        
  { id: 3, name: "Chicken" },         
  { id: 4, name: "Burger" },          
  { id: 5, name: "Bakery" },          
  { id: 6, name: "Desserts" },        
  { id: 7, name: "Drinks & Coffee" },  
  { id: 8, name: "Pizza" },            
  { id: 9, name: "Koshary" },          
  { id: 10, name: "Sushi & Asian" },   
],


  menuItems: [
  // ===========================
  // 1. Balbaa Village (Grill & Seafood)
  // ===========================
  { id: 1, restaurantId: 1, categoryId: 1, name: "Grilled Kofta", description: "Fresh kofta grilled over charcoal", price: 95, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUuuDcHalYUJnsr3cT2AHDcT_cfphNjN3N7g&s" },
  { id: 2, restaurantId: 1, categoryId: 1, name: "Grilled Chicken", description: "Half grilled chicken with rice", price: 120, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAnyD2z1QEQwgQFkqFhG_K6CT6I_hNTMuKQ&s" },
  { id: 3, restaurantId: 1, categoryId: 2, name: "Grilled Shrimp", description: "Fresh Alexandrian shrimp", price: 220, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVRx_fNLWaCleTEEm-HKttKTsLw02SqsbtZQ&s" },
  { id: 4, restaurantId: 1, categoryId: 2, name: "Seafood Soup", description: "Rich seafood soup with calamari & shrimp", price: 80, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcCEVsk6OghX2Rg9LQlZSs9yNfT8_n4ZIw&s" },

  // ===========================
  // 2. Hosny Restaurant (Grill)
  // ===========================
  { id: 5, restaurantId: 2, categoryId: 1, name: "Mix Grill", description: "Kebab, Kofta, Chicken Tikka", price: 180, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0feuAtJEtS98l5ruAwobwwybzujr4g5cunA&s" },
  { id: 6, restaurantId: 2, categoryId: 1, name: "Kebab", description: "Premium lamb kebab", price: 150, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYvf4a3Zapyn88BPMxxDv-li_tphcwKhLFww&s" },
  { id: 7, restaurantId: 2, categoryId: 1, name: "Chicken Tikka", description: "Spicy marinated chicken", price: 110, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5kkRq5Etv33MJZhZtR8wpTNWI2o4tLHdsaLyt_kifw1jBvBZh7kkLaPIIi1YBc2of8s&usqp=CAU" },

  // ===========================
  // 3. Koueider (Desserts)
  // ===========================
  { id: 8, restaurantId: 3, categoryId: 6, name: "Chocolate Cake", description: "Rich chocolate cake slice", price: 65, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFeJHaHSmHvEiJWdspRfjKrkrOdb_pIfMqAg&s" },
  { id: 9, restaurantId: 3, categoryId: 6, name: "Ice Cream Cup", description: "3 scoops of Koueider ice cream", price: 45, imageUrl: "https://cdn.loveandlemons.com/wp-content/uploads/2025/06/banana-ice-cream.jpg" },
  { id: 10, restaurantId: 3, categoryId: 7, name: "Latte", description: "Freshly brewed latte", price: 50, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIoIVSktbB1Iqk7g11LTyN27DcK0s71zP5-Q&s" },

  // ===========================
  // 4. Chicken Fil-Alex
  // ===========================
  { id: 11, restaurantId: 4, categoryId: 3, name: "Fried Chicken Meal", description: "3 pcs crispy chicken + fries", price: 85, imageUrl: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Crispy-Fried-Chicken_EXPS_TOHJJ22_6445_DR-_02_03_11b-14.jpg" },
  { id: 12, restaurantId: 4, categoryId: 3, name: "Chicken Sandwich", description: "Crispy chicken sandwich", price: 70, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLMxEHsJJgtdaPfj31Sr4bzH4vcXCFUx05Cw&s" },

  // ===========================
  // 5. El Baraka Chicken
  // ===========================
  { id: 13, restaurantId: 5, categoryId: 3, name: "Broast Chicken", description: "4 pcs broasted chicken + fries", price: 95, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStiIjE5giJKKusxJ13jw2KcIe0BH0iAy94ePny_5xH7_4RtOkZ4nLZrh9E_X9u31_20Nw&usqp=CAU" },

  // ===========================
  // 6. Buffalo Burger
  // ===========================
  { id: 14, restaurantId: 6, categoryId: 4, name: "Double Cheese Burger", description: "Double beef patty with cheese", price: 150, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAFf-fyomEryCt82DRzht57DLyPmsRwJo4g&s" },
  { id: 15, restaurantId: 6, categoryId: 4, name: "Smoky Burger", description: "Smoked beef patty", price: 165, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa4Vmi4g3Vui5iE_rRbzq4ZZb5XE7F48AlDQ&s" },

  // ===========================
  // 7. Seagull Fish
  // ===========================
  { id: 16, restaurantId: 7, categoryId: 2, name: "Fried Calamari", description: "Crispy fresh calamari rings", price: 140, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeAQBp4TQkvkMzLgtJHU59reu8TxZo93XRDw&s" },
  { id: 17, restaurantId: 7, categoryId: 2, name: "Grilled Fish", description: "Alexandrian grilled fish", price: 180, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrhS-r1Zt01vsiF4G1i1H-CgLFsz7CBQjIxw&s" },

  // ===========================
  // 8. TBS Bakery
  // ===========================
  { id: 18, restaurantId: 8, categoryId: 5, name: "Chocolate Croissant", description: "Freshly baked croissant", price: 35, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0Rz36kWdknKn9PomOA6QOhOnt0sc9ll8Xw&s" },
  { id: 19, restaurantId: 8, categoryId: 7, name: "Cold Brew", description: "Iced cold brew coffee", price: 65, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_CdLInNSiJ-IqIVvZ33d1thFZSb02ywpPew&s" },

  // ===========================
  // 9. Popeyes
  // ===========================
  { id: 20, restaurantId: 9, categoryId: 3, name: "Spicy Chicken Meal", description: "3 pcs spicy chicken", price: 110, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeYTmrhvfQG3MILf4BWkZOLE1tE7HlXVohcA&s" },

  // ===========================
  // 10. Hardee's
  // ===========================
  { id: 21, restaurantId: 10, categoryId: 4, name: "Mushroom & Swiss", description: "Beef burger with Swiss cheese", price: 140, imageUrl: "https://insanelygoodrecipes.com/wp-content/uploads/2024/08/Mushroom-Swiss-Burger-Featured-500x375.jpg" },

  // ===========================
  // 11. Pizza Hut
  // ===========================
  { id: 22, restaurantId: 11, categoryId: 8, name: "Pepperoni Pizza", description: "Medium pepperoni pizza", price: 180, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHoML_RWrNhS3xbZNeWhpj9jjsyG7Ex-43aw&s" },
  { id: 23, restaurantId: 11, categoryId: 8, name: "Super Supreme", description: "Beef, peppers, mushrooms", price: 210, imageUrl: "https://images.deliveryhero.io/image/talabat/MenuItems/Super_supreme_pizza_638197265000447584.jpg" },

  // ===========================
  // 12. Domino's
  // ===========================
  { id: 24, restaurantId: 12, categoryId: 8, name: "Cheese Lovers", description: "Loaded cheese pizza", price: 170, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFgpp7lI2oG1ZJ_WhAO6-N-G14pl-tj2wVxg&s" },

  // ===========================
  // 13. Koshary El Tahrir
  // ===========================
  { id: 25, restaurantId: 13, categoryId: 9, name: "Large Koshary", description: "Traditional Egyptian koshary", price: 40, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9x8iLTM56sxe6u84PasdhnzY07U55bUR7pQ&s" },

  // ===========================
  // 14. Fuddruckers
  // ===========================
  { id: 26, restaurantId: 14, categoryId: 4, name: "Original Burger", description: "Classic American burger", price: 160, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQAMdYH_8YXo3IpppGOFZgJG5fF9TRfZ3m-Q&s" },

  // ===========================
  // 15. 5 Roosters
  // ===========================
  { id: 27, restaurantId: 15, categoryId: 3, name: "Crispy Chicken Strips", description: "5 pcs chicken strips", price: 95, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2nwvxIOnYxnGXcROUvdVua9S0GJpUXZPsA&s" },

  // ===========================
  // 16. Sushi King
  // ===========================
  { id: 28, restaurantId: 16, categoryId: 10, name: "California Roll", description: "8 pcs classic roll", price: 120, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwaMtwfwDiPCg_KYLqXLSMuKK_DUYvTcF3iw&s" },
  { id: 29, restaurantId: 16, categoryId: 10, name: "Salmon Sashimi", description: "6 pcs fresh salmon", price: 160, imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsudachirecipes.com%2Fsalmon-sashimi%2F&psig=AOvVaw2En2RwF6LpWmCe33nzehyL&ust=1764098064611000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJCy_8S_i5EDFQAAAAAdAAAAABAE" },

  // ===========================
  // 17. McDonald's
  // ===========================
  { id: 30, restaurantId: 17, categoryId: 4, name: "Big Mac", description: "Beef double layer burger", price: 130, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQX9fzQWD9eTeylWmkgMmoYrqvJvh9A1zLA&s" },

  // ===========================
  // 18. Kababgy
  // ===========================
  { id: 31, restaurantId: 18, categoryId: 1, name: "Kebab Plate", description: "Lamb kebab + rice", price: 160, imageUrl: "https://www.sainsburysmagazine.co.uk/media/11517/download/Chicken-Kebab-Platter.jpg?v=1" },

  // ===========================
  // 19. Sultana Ice Cream
  // ===========================
  { id: 32, restaurantId: 19, categoryId: 6, name: "Triple Ice Cream", description: "3 scoop cup", price: 35, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPkm7z_ulRejFF43HnZsFLVfgBktr24NU0bA&s" },

  // ===========================
  // 20. Coffee Corner
  // ===========================
  { id: 33, restaurantId: 20, categoryId: 7, name: "Cappuccino", description: "Creamy hot cappuccino", price: 55, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvthhy8frIY2WeY4dgkTfGd9zzChCeVpv5zw&s" },

  // ===========================
  // 21. Starbucks
  // ===========================
  { id: 34, restaurantId: 21, categoryId: 7, name: "Caramel Macchiato", description: "Signature caramel drink", price: 95, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_agCT5BnXcwx5mOXvV9RXaRIL5-m3TdQf-w&s" },

  // ===========================
  // 22. La Poire
  // ===========================
  { id: 35, restaurantId: 22, categoryId: 6, name: "Red Velvet Slice", description: "Fresh fluffy red velvet", price: 70, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtUiAAAPTcSQ3spCfhJGZe5smy-RmTFilrPg&s" },

  // ===========================
  // 23. Sale Sucre
  // ===========================
  { id: 36, restaurantId: 23, categoryId: 6, name: "Éclair Box", description: "4 mini éclairs", price: 90, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6oN-i8gK5VOZudw6Id5JtCsBUDZe02GyNvw&s" },

  // ===========================
  // 24. El Saidy Patisserie
  // ===========================
  { id: 37, restaurantId: 24, categoryId: 6, name: "Basbousa Slice", description: "Egyptian basbousa", price: 35, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIT3jY7EAUuouPUUk8EWqPaz-_82tqwE3Q0A&s" }
],

};
module.exports = DATA;