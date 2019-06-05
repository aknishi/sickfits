[SickFits demo link!](https://sickfits-next-production1515.herokuapp.com/)

# SICKFITS!

SickFits React Apollo front end with GraphQL and Prisma backend e-commerce web application. It uses Next.js for routing and tooling as well as Yoga GraphQL to implement resolvers for queries and mutations. The application allows users to sell and buy items. They can upload a photo for the item and set a price. Users can add items to their cart which is client-side rendered using caching.

# Features
+ Secure frontend to backend user authentication using BCrypt.
+ Payment Processing using Stripe
+ Photo Uploading using Cloudinary
+ Managing permissions for users. (e.g. only users who uploaded the items and admins can edit or delete those items)
+ The shopping cart is client-side rendered allowing continuity between pages. This was achieved using caching.
+ Real-time item search using Downshift and Debounce
+ Implement Reset tokens that get emailed to users for resetting password.

## My Cart
![Main](https://github.com/aknishi/sickfits/blob/master/images/MyCart.gif)

## Item Search
![Search](https://github.com/aknishi/sickfits/blob/master/images/Search.gif)

## Orders
![Orders](https://github.com/aknishi/sickfits/blob/master/images/Orders.png)

## Permissions
![Permissions](https://github.com/aknishi/sickfits/blob/master/images/Permissions.png)

## Reset Token
![Reset](https://github.com/aknishi/sickfits/blob/master/images/Reset%20Token.png)


