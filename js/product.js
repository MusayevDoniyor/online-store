init();

async function init() {
  const productId = getId();
  const product = await fetchProduct(productId);
  console.log(product);
}

function getId() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");

  return id;
}

async function fetchProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const result = await response.json();

  return result;
}

// ! Assalomu aleykum ustoz bu kodimda nimadir xato berdi ishlamayapti shunga js ni ishlatomayapman shunga bu joyidan toxtatdim u yogiga otomayapman
// VM733:1 Uncaught (in promise) SyntaxError: Unexpected end of JSON input
//     at fetchProduct (product.js:19:33)
//     at async init (product.js:5:19)
//
