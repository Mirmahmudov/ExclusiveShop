import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { useEffect, useState } from "react";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import OneProduct from "./pages/oneproduct/OneProduct";
import Cart from "./pages/cart/Cart";
import CheckOut from "./pages/checkout/CheckOut";
import Account from "./pages/account/Account";
import Error from "./pages/error/Error";
import Wishlist from "./pages/wishlist/Wishlist";

function App() {
  const [products, setproducts] = useState([
    {
      id: 0,
      image: "images/card1.png",
      imgs: [
        "https://doubledeellc.com/wp-content/uploads/2023/10/1-1.jpg",
        "https://img.fruugo.com/product/8/20/193587208_0340_0340.jpg",
        "https://rukminim2.flixcart.com/image/850/1000/kst9gnk0/joystick/r/9/c/n1-w320-6-in-1-2-4ghz-wireless-gaming-controller-for-pc-games-original-imag6arjn9mcmtyg.jpeg?q=90&crop=false",
        "https://rukminim2.flixcart.com/image/850/1000/ksnjp8w0/joystick/5/f/i/n1-w320-6-in-1-2-4ghz-wireless-gaming-controller-for-pc-games-original-imag664mzurfbhgs.jpeg?q=90&crop=false",
      ],
      title: "HAVIT HV-G92 Gamepad",
      price: {
        new: 120,
        old: 160,
      },
      sale: 40,
      type: "frash",
    },
    {
      id: 1,
      image: "images/card2.png",
      imgs: [
        "https://s.alicdn.com/@sc04/kf/H54cfce54d422487cb9179ac7ed2a525eD.jpg_720x720q50.jpg",
        "https://www.startech.com.bd/image/cache/catalog/keyboard/imice/km-900/km-900-01-500x500.jpg",
        "https://spphone.uz/wp-content/uploads/2022/02/KM-9002.jpg",
        "https://a.allegroimg.com/original/117e45/e6d436d042e6b18c1df1a40ae7db/Klawiatura-RGB-mysz-RGB-metalowe-iMICE-KM-900",
      ],
      title: "AK-900 Wired Keyboard",
      price: {
        new: 960,
        old: 1160,
      },
      sale: 35,
      type: "frash",
    },
    {
      id: 2,
      image: "images/card3.png",
      imgs: [
        "https://i5.walmartimages.com/asr/c95fa77e-cc9e-476b-b5a1-a35925fa1d6d.b93f674445c6d416e45ee5b2aef0ffa1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "https://i0.wp.com/shop.clarioncomputers.in/wp-content/uploads/2024/07/optix-g273qf-image-01-600x600-1.webp?fit=600%2C600&ssl=1",
        "https://www.natix.com/cdn/shop/products/31916039.jpg?v=1628487184",
        "https://www.scan.co.uk/images/products/xlarge/3477401-xl-a.jpg",
      ],
      title: "IPS LCD Gaming Monitor",
      price: {
        new: 370,
        old: 400,
      },
      sale: 30,
      type: "frash",
    },
    {
      id: 3,
      image: "images/card4.png",
      imgs: [
        "https://wc.theemwiz.in/wp-content/uploads/2022/11/Product-32.jpg",
        "https://doddsandshute.com/shop/pub/media/catalog/product/cache/7c0686f28ae54f0e875024628bf6717f/f/r/frida_lounge.jpg",
        "https://static.vecteezy.com/system/resources/previews/020/218/659/large_2x/331-gray-chair-with-wooden-legs-isolated-on-a-transparent-background-photo.jpg",
        "https://images.meesho.com/images/products/220324577/xcnxr_512.jpg",
      ],
      title: "S-Series Comfort Chair ",
      price: {
        new: 375,
        old: 400,
      },
      sale: 25,
      type: "frash",
    },
    {
      id: 4,
      image: "images/card4.png",
      imgs: [
        "https://wc.theemwiz.in/wp-content/uploads/2022/11/Product-32.jpg",
        "https://doddsandshute.com/shop/pub/media/catalog/product/cache/7c0686f28ae54f0e875024628bf6717f/f/r/frida_lounge.jpg",
        "https://static.vecteezy.com/system/resources/previews/020/218/659/large_2x/331-gray-chair-with-wooden-legs-isolated-on-a-transparent-background-photo.jpg",
        "https://images.meesho.com/images/products/220324577/xcnxr_512.jpg",
      ],
      title: "S-Series Comfort Chair ",
      price: {
        new: 375,
        old: 400,
      },
      sale: 25,
      type: "frash",
    },

    {
      id: 5,
      image: "images/card5.png",
      imgs: [
        "https://editorialist.com/webcompressed/2024/2/029/094/599/29094599~dark%20pink_0.jpg",
        "https://images.vestiairecollective.com/images/resized/w=1246,q=75,f=auto,/produit/multicolour-polyamide-the-north-face-x-gucci-trench-coat-44028260-2_3.jpg",
        "https://images.vestiairecollective.com/images/resized/w=1246,q=75,f=auto,/produit/multicolour-polyamide-the-north-face-x-gucci-trench-coat-44028260-1_3.jpg",
        "https://images.vestiairecollective.com/images/resized/w=1246,q=75,f=auto,/produit/the-north-face-x-gucci-polyester-groen-jas-43562549-1_2.jpg",
      ],
      title: "The north coat",
      price: {
        new: 260,
        old: 360,
      },
      type: "selling",
    },
    {
      id: 6,
      image: "images/card6.png",
      imgs: [
        "https://img.mytheresa.com/356/402/30/jpeg/catalog/product/1d/P00368627.jpg",
        "https://www.tizianafausti.com/media/catalog/product/cache/9fdd47f660230e6c661f6112097a21ff/i/4/i45-gucci-gucci-borseamano-tizianafausti-724642fadhs9756.jpg",
        "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1645726543/681295_9C2SN_4076_001_082_0000_Light.jpg",
        "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1645726549/681295_9C2SN_4076_010_082_0000_Light-Gucci-Savoy-medium-duffle-bag.jpg",
      ],
      title: "Gucci duffle bag",
      price: {
        new: 960,
        old: 1160,
      },
      type: "selling",
    },
    {
      id: 7,
      image: "images/card7.png",
      imgs: [
        "https://www.bigw.com.au/medias/sys_master/images/images/h70/h30/51224273190942.jpg",
        "https://www.startech.com.bd/image/cache/catalog/cpu-cooler/deepcool/castle-240rgb-v2/castle-240rgb-v2-01-500x500.jpg",
        "https://www.onixbd.com/image/cache/catalog/cpu%20cooler/deepcool/castle-360-argb-v2/deepcool-castle-360-argb-v2-liquid-cpu-cooler-2-412x412.jpg",
        "https://ae01.alicdn.com/kf/H5f4dace6a0e94d5380abc1098c7189c1Q.jpg_960x960.jpg",
      ],
      title: "RGB liquid CPU Cooler",
      price: {
        new: 160,
        old: 170,
      },
      type: "selling",
    },
    {
      id: 8,
      image: "images/card8.png",
      imgs: [
        "https://doubledeellc.com/wp-content/uploads/2023/10/4.jpg",
        "https://commerce.demo.centarro.io/sites/default/files/styles/cklb_medium_max_1144px2021-09/side-table_0_21_0_2.jpg?itok=jjJv9vzC",
        "https://www.monarchfurnishings.com/wp-content/uploads/2024/06/pixelcut_8-2-scaled.jpg",
        "https://www.monarchfurnishings.com/wp-content/uploads/2024/06/pixelcut_10-2-scaled.jpg",
      ],
      title: "Small BookSelf",
      price: {
        new: 360,
      },
      type: "selling",
    },

    {
      id: 9,
      image: "images/card9.png",
      imgs: [
        "https://target.scene7.com/is/image/Target/GUEST_d96ae8a3-6a58-4c87-bb59-c541cb3c119f?wid=488&hei=488&fmt=pjpeg",
        "https://images.heb.com/is/image/HEBGrocery/prd-medium/002083055.jpg",
        "https://m.media-amazon.com/images/I/71UuSBbcCFL._AC_UF1000,1000_QL80_.jpg",
        "https://s7d6.scene7.com/is/image/bjs/322170",
      ],
      title: "Breed Dry Dog Food",
      price: {
        new: 375,
      },
      new: false,
      type: "explore",
    },
    {
      id: 10,
      image: "images/card10.png",
      imgs: [
        "https://m.media-amazon.com/images/I/810zgNhYR+L._AC_UF350,350_QL80_.jpg",
        "https://5.imimg.com/data5/FE/BP/GLADMIN-18342908/canon-eos-700d-kit-500x500.png",
        "https://5.imimg.com/data5/FP/DV/GLADMIN-11823496/canon-eos-700d-kit-500x500.png",
        "https://www.ugabox.com/images/product/camera/canon/Canon-EOS-Rebel-T7i.jpg",
      ],
      title: "CANON EOS DSLR Camera",
      price: {
        new: 375,
      },
      new: false,
      type: "explore",
    },
    {
      id: 11,
      image: "images/card11.png",
      imgs: [
        "https://e2simages.excess2sell.com/images/products/lenovcolaam1624092836638_1624092837_lg.jpg",
        "https://compuscience.com.eg/13623-pdt_771/best-laptop-lenovo-ideapad-gaming-3-i5-11320h-8gb-ssd-512gb-rtx3050-4g-156-fhd-dos-shadow-black.jpg",
        "https://www.thebarcodewarehouse.co.uk/Images/Product/Default/xlarge/82K10132UK.jpg",
        "https://m.media-amazon.com/images/I/81HFdfYDgPL._AC_UF1000,1000_QL80_.jpg",
      ],
      title: "ASUS FHD Gaming Laptop",
      price: {
        new: 375,
      },
      new: false,
      type: "explore",
    },
    {
      id: 12,
      image: "images/card12.png",
      imgs: [
        "https://sandbox.elemisthemes.com/assets/img/photos/shs2@2x.jpg",
        "https://sandbox.elemisthemes.com/assets/img/photos/shs4.jpg",
        "https://sandbox.elemisthemes.com/assets/img/photos/shs1.jpg",
        "https://sandbox.elemisthemes.com/assets/img/photos/shs3.jpg",
      ],
      title: "Curology Product Set ",
      price: {
        new: 375,
      },
      new: false,
      type: "explore",
    },

    {
      id: 13,
      image: "images/card13.png",
      imgs: [
        "https://s.alicdn.com/@sc04/kf/Hda0d4d9d43ac4c1093b1d12f9cae5e6d4.jpg_300x300.jpg",
        "https://m.media-amazon.com/images/I/61MujhYVR5L.jpg",
        "https://ak1.ostkcdn.com/images/products/is/images/direct/9d34b6d5a5713b2c0cccbacc7a52548336a4f211/12V-Licensed-Benz-AMG-Electric-Vehicles.jpg?imwidth=380&impolicy=medium",
        "https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/w/g/wgcfsu8_kewbpbvafkmzeinb.png?format=jpeg&width=368",
      ],
      title: "Kids Electric Car",
      price: {
        new: 375,
      },
      new: true,
      type: "explore",
      colors: {
        color: "images/card-color.svg",
        color2: "images/card-color-red.png",
      },
    },
    {
      id: 14,
      image: "images/card14.png",
      imgs: [
        "https://i.ebayimg.com/images/g/pzgAAOSwYkRjvxvh/s-l400.jpg",
        "https://adrenalinsports.ie/cdn/shop/products/db7c03ff5d734a51afb6aed2002b612b_9366_800x.webp?v=1672412976",
        "https://cdn.0brandcommerce.com/109564_3_M.jpg",
        "https://cdn.0brandcommerce.com/109563_3_L.jpg",
      ],
      title: "Jr. Zoom Soccer Cleats",
      price: {
        new: 375,
      },
      new: false,
      type: "explore",
      colors: {
        color: "images/card-color2.png",
        color2: "images/card-color-red.png",
      },
    },
    {
      id: 15,
      image: "images/card15.png",
      imgs: [
        "https://www.pngall.com/wp-content/uploads/15/PS5-Controller-PNG-Clipart.png",
        "https://www.pngall.com/wp-content/uploads/15/PS5-Controller-PNG-Image-File.png",
        "https://static.vecteezy.com/system/resources/thumbnails/046/542/128/small_2x/gamer-controller-isolated-png.png",
        "https://static.vecteezy.com/system/resources/thumbnails/046/542/156/small_2x/gamer-controller-isolated-png.png",
      ],
      title: "GP11 Shooter USB Gamepad",
      price: {
        new: 375,
      },
      new: true,
      type: "explore",
      colors: {
        color: "images/card-color3.png",
        color2: "images/card-color-red.png",
      },
    },
    {
      id: 16,
      image: "images/card16.png",
      imgs: [
        "https://static.reserved.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/7/7/7769L-67X-010-1-408169_1.jpg",
        "https://img.shopstyle-cdn.com/sim/e6/68/e66814915edd8101a26a68060056b727_best/logo-appliqued-padded-satin-bomber-jacket.jpg",
        "https://s3.gsxtr.com/i/p/daily-paper-ronack-jacket-pine-green-417769-840-2.jpg",
        "https://m.media-amazon.com/images/I/61kkon2urJL._AC_SY350_QL65_.jpg",
      ],
      title: "Quilted Satin Jacket",
      price: {
        new: 375,
      },
      new: false,
      type: "explore",
      colors: {
        color: "images/card-color4.png",
        color2: "images/card-color-red.png",
      },
    },

    {
      id: 17,
      image: "images/card1.png",
      imgs: [
        "https://doubledeellc.com/wp-content/uploads/2023/10/1-1.jpg",
        "https://img.fruugo.com/product/8/20/193587208_0340_0340.jpg",
        "https://rukminim2.flixcart.com/image/850/1000/kst9gnk0/joystick/r/9/c/n1-w320-6-in-1-2-4ghz-wireless-gaming-controller-for-pc-games-original-imag6arjn9mcmtyg.jpeg?q=90&crop=false",
        "https://rukminim2.flixcart.com/image/850/1000/ksnjp8w0/joystick/5/f/i/n1-w320-6-in-1-2-4ghz-wireless-gaming-controller-for-pc-games-original-imag664mzurfbhgs.jpeg?q=90&crop=false",
      ],
      title: "HAVIT HV-G92 Gamepad",
      price: {
        new: 120,
        old: 160,
      },
      sale: 40,
      type: "related",
    },
    {
      id: 18,
      image: "images/card2.png",
      imgs: [
        "https://s.alicdn.com/@sc04/kf/H54cfce54d422487cb9179ac7ed2a525eD.jpg_720x720q50.jpg",
        "https://www.startech.com.bd/image/cache/catalog/keyboard/imice/km-900/km-900-01-500x500.jpg",
        "https://spphone.uz/wp-content/uploads/2022/02/KM-9002.jpg",
        "https://a.allegroimg.com/original/117e45/e6d436d042e6b18c1df1a40ae7db/Klawiatura-RGB-mysz-RGB-metalowe-iMICE-KM-900",
      ],
      title: "AK-900 Wired Keyboard",
      price: {
        new: 960,
        old: 1160,
      },
      sale: 35,
      type: "related",
    },
    {
      id: 19,
      image: "images/card3.png",
      imgs: [
        "https://i5.walmartimages.com/asr/c95fa77e-cc9e-476b-b5a1-a35925fa1d6d.b93f674445c6d416e45ee5b2aef0ffa1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        "https://i0.wp.com/shop.clarioncomputers.in/wp-content/uploads/2024/07/optix-g273qf-image-01-600x600-1.webp?fit=600%2C600&ssl=1",
        "https://www.natix.com/cdn/shop/products/31916039.jpg?v=1628487184",
        "https://www.scan.co.uk/images/products/xlarge/3477401-xl-a.jpg",
      ],
      title: "IPS LCD Gaming Monitor",
      price: {
        new: 370,
        old: 400,
      },
      sale: 30,
      type: "related",
    },
    {
      id: 20,
      image: "images/card7.png",
      imgs: [
        "https://www.bigw.com.au/medias/sys_master/images/images/h70/h30/51224273190942.jpg",
        "https://www.startech.com.bd/image/cache/catalog/cpu-cooler/deepcool/castle-240rgb-v2/castle-240rgb-v2-01-500x500.jpg",
        "https://www.onixbd.com/image/cache/catalog/cpu%20cooler/deepcool/castle-360-argb-v2/deepcool-castle-360-argb-v2-liquid-cpu-cooler-2-412x412.jpg",
        "https://ae01.alicdn.com/kf/H5f4dace6a0e94d5380abc1098c7189c1Q.jpg_960x960.jpg",
      ],
      title: "RGB liquid CPU Cooler",
      price: {
        new: 160,
        old: 170,
      },
      sale: false,
      type: "related",
    },
  ]);
  const [salling, setSalling] = useState(
    products.filter((item) => {
      return item.type === "selling";
    })
  );
  const [exploreData, setExplore] = useState(
    products.filter((item) => {
      return item.type === "explore";
    })
  );
  const [related, setRelated] = useState(
    products.filter((item) => {
      return item.type === "related";
    })
  );

  const [cartMenu, setCartMenu] = useState([]);
  const [heartCart, setHeartCart] = useState([]);

  const addHeart = (id) => {
    const heartProduct = products.filter((item) => {
      return item.id == id;
    });
    setHeartCart([...heartCart, heartProduct[0]]);
  };
  const heratDelete = (id) => {
    setHeartCart(heartCart.filter((item) => item.id !== id));
  };

  const addCart = (id) => {
    const cartProduct = products.filter((item) => {
      return item.id == id;
    });

    setCartMenu([...cartMenu, cartProduct[0]]);
  };
  const cartDelete = (id) => {
    setCartMenu(cartMenu.filter((item) => item.id !== id));
  };

  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );

  const [userAccount, setUserAccount] = useState(null)

  const userInfo = () => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${token}`
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://ecommercev01.pythonanywhere.com/user/detail/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setUserAccount(result)
      })
      .catch((error) => console.error(error));
  };

  useEffect(()=>{
    userInfo();
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar
          token={token}
          setToken={setToken}
          heartCart={heartCart}
          cartMenu={cartMenu}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                addHeart={addHeart}
                addCart={addCart}
                explore={exploreData}
                salling={salling}
                products={products}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route
            path="/oneproduct/:id"
            element={
              <OneProduct
                related={related}
                products={products}
                exploreData={exploreData}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cartDelete={cartDelete} cartMenu={cartMenu} />}
          />
          <Route path="/checkout" element={<CheckOut cartMenu={cartMenu} />} />
          <Route path="/account" element={<Account userAccount={userAccount} />} />
          <Route path="/error" element={<Error />} />
          <Route
            path="/wishlist"
            element={
              <Wishlist
                heratDelete={heratDelete}
                heartCart={heartCart}
                salling={salling}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
