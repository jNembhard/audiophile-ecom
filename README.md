# Audiophile

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Screenshot

![](./screenshot.jpg)

### Links

- Live Site URL:

## My process

### Built with

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Chakra](https://chakra-ui.com/) - For styles
- [React Redux](https://react-redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Hook Form](https://react-hook-form.com/)
- Atomic Design Pattern
- Mobie-first workflow

### What I learned

I've wanted to work on completing a project using TypeScript for quite some time. Originally, I was working on this project with Styled Components and decided this would be a good time to learn how to use some new tools. This is where Chakra comes into play.

#### Chakra

Chakra UI functions as a CSS-In-JS solution. Imagine building blocks comprised of inline styles, with the ability easily include framer motion. It's quite a powerful styling system.

```html
<Box as="footer" mt={["7.5rem", "6rem", "12.5rem"]} bg="black" textAlign={{
base: "center", sm: "left" }} >
```

Chakra uses a design pattern with a mobile-first workflow in mind. If you look at textAlign, you can design starting at the base to sm (mobile) sm to md (tablet) md to lg (desktop). The styling breakpoint move up in increments starting from 0em to 30em.

The "as" prop functions as a way to change components to whatever html you need to use. "div" will always be the default value.

Chakra also provides its own custom hooks like the one you see below:

```typescript
const toast = useToast();

const emptyCart = () => {
  dispatch(clearCart());
  toast({
    title: "Cart is empty",
    status: "success",
    duration: 4500,
    position: "top-left",
    isClosable: true,
  });
};
```

`useToast()` allows you to feedback to users when an action is performed. In this case, an alert would be sent to users when their cart is successfully cleared.

#### Redux Toolkit

You'll notice across the site there's a need to track the cart's state throughout the user's purchasing journey. Redux Toolkit is widely known and makes it easy to configure the Redux store while eliminating a lot of boilerplate code.

`configureStore()` allows you to do things like automatically combine your slice reducers:

```typescript
const store = configureStore({
  reducer: { cart: cartReducer, menu: menuReducer },
});
```

```typescript
const menuSlice = createSlice({
  name: "menu",
  initialState: { openMenu: false },
  reducers: {
    toggleNav: (state) => {
      state.openMenu = !state.openMenu;
    },
    closeNav: (state) => {
      state.openMenu = false;
    },
  },
});
```

Here, the slices act as a series of logic and actions to be peformed when the reducer is called. For instance, when click the hamburger menu icon, the initial state of the menu is closed and on each click, you can toggle the menu betwen open and closed states.

Redux toolkit also allows you to create reducer logic in a mutable way. Think incrementing the number of items you add to a cart like, clicking a button to increase the number of headphones present in your cart.

#### Next JS

One of the many advantages of NextJS revolves around the ability to generate pages dynamically. How is that done here? A good example would be the product page.

### Continued development

A major goal with this project is to create a Full Stack application and connecting this store to Stripe.

## Author

- Website - [Jason Nembhard](https://www.jasonnembhard.com)
