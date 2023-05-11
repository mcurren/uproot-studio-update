const carousels = document.querySelectorAll(".glide");

if (carousels.length) {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 25,
    peek: {
      before: 40,
      after: 90
    },
    breakpoints: {
      700: {
        perView: 1,
        gap: 10,
        peek: {
          before: 0,
          after: 40
        }
      },
      990: {
        perView: 2,
        gap: 20,
        peek: {
          before: 30,
          after: 50
        }
      }
    }
  }).mount();
}