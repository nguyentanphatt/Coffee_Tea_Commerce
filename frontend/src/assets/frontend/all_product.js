import image01 from './mist_blend.jpg'
import image02 from './roasters_sunrise_roast.jpg'
import image03 from './Whisper.jpg'
import image04 from './Dark_roast.jpg'
import image05 from './Organic_french_roast.jpg'
import image06 from './Monster_fuel.jpg'
import image07 from './Royal_silk_espresso.jpg'
import image08 from './Goldern-Morning.png'
import image09 from './Bliss_brew.png'
import image10 from './sencha.png'
import image11 from './White_tea.png'
import image12 from './Chamomile_tea.jpg'
import image13 from './black_tea_assam.jpg'
import image14 from './Earl_grey.jpg'
import image15 from './Pu-erh_tea.jpg'
import image16 from './Longjing_green_tea.jpg'
import image17 from './Jasmine_green_tea.jpg'
import image18 from './Hibiscus_tea.jpg'
import image19 from './Arabica.png'
import image20 from './Robusta.jpg'
import image21 from './Liberica.jpg'
import image22 from './Excelsa.jpg'
import image23 from './Assam.jpg'
import image24 from './Darjeeling.jpg'
import image25 from './Sencha_seed.jpg'
import image26 from './Pu-erh_seed.jpg'
import image27 from './Tieguanyin.jpg'

let all_product = [
    {
        id: 1,
        "name": "Morning Mist Blend",
        "price": 31.50,
        "description": "A lively, balanced coffee, sweet and smooth with lively citrus topnotes and a lingering buttery finish. Bright enough for breakfast, smooth enough to drink all day...or mix with whiskey for a memorable Irish Coffee.",
        "small_description": "A refreshing start to your day.",
        "image": image01,
        "favor": "Light Favor",
        "category": "coffee",
        "quantity": 100,
        "grind": "Espresso",
        "type":"Regular"
    },
    {
        "id":2,
        "name": "Caribbean Roasters Sunrise",
        "price": 35.00,
        "description": "Caribbean Roasters Sunrise Roast Ground Coffee is a medium roasted blend featuring delicate notes of chocolate, orange zest, and apricot. Enjoy the flavors of the island life from the comfort of home with this 8oz pouch.",
        "small_description": "Wake up gently with the soft.",
        "image": image02,
        "favor": "Light Favor",
        "category": "coffee",
        "quantity": 100,
        "grind": "Manual Drip",
        "type":"Decaf"
    },
    {
        "id":3,
        "name": "Whisper Espresso",
        "price": 14.50,
        "description": "Bright, fruity, and melodious, with notes of cherry, dark chocolate, and orange peel. Our seasonal espresso blend. ",
        "small_description": "For espresso lovers.",
        "image": image03,
        "favor": "Light Favor",
        "category": "coffee",
        "quantity": 100,
        "grind": "Auto Drip",
        "type":"Regular"
    },
    {
        "id":4,
        "name": "Dark Roast Of Decade",
        "price": 20.80,
        "description": "Rich, intense, and unforgettable—our Dark Roast of the Decade is a masterpiece crafted for true coffee aficionados. With deep, smoky flavors and a bold body, this roast delivers a powerful experience with every sip. ",
        "small_description": "Rich, intense, and unforgettable.",
        "image": image04,
        "favor": "Strong Favor",
        "category": "coffee",
        "quantity": 100,
        "grind": "Espresso",
        "type":"Regular"
    },
    {
        "id":5,
        "name": "Organic French Roast",
        "price": 20.00,
        "description": "Our favorite beans for this deepest roast are from the leading Latin American origins, such as Guatemala and Colombia, where high altitudes enable coffee cherry to mature more slowly, becoming denser, harder, and packed with flavor.",
        "small_description": "Bold, smoky, and sustainably sourced.",
        "image": image05,
        "favor": "Strong Favor",
        "category": "coffee",
        "quantity": 100,
        "grind": "Manual Drip",
        "type":"Decaf"
    },
    {
        "id":6,
        "name": "Monster Fuel",
        "price": 28.80,
        "description": "Unleash your inner beast with Monster Fuel, a high-octane coffee blend crafted for those who need serious energy. This powerful dark roast packs a punch with bold, smoky flavors and an extra boost of caffeine to keep you going all day long. ",
        "small_description": "Bold, smoky flavors.",
        "image": image06,
        "favor": "Strong Favor",
        "category": "coffee",
        "quantity": 100,
        "grind": "Auto Drip",
        "type":"Regular"
    },
    {
        "id":7,
        "name": "Royal Silk Espresso",
        "price": 15.29,
        "description": "The heaviest bodied and smoothest of the Sonofresco espresso blends, with complexity concentrated at the bottom of the profile: dry fruit, dark chocolate notes. Designed to master large milk drinks with body and presence rather than with sharpness. Produces a low-toned, syrupy straight shot.",
        "small_description": "Crisp, toasty.",
        "image": image07,
        "favor": "Good With Milk",
        "category": "coffee",
        "quantity": 100,
        "grind": "Espresso",
        "type":"Decaf"
    },
    {
        "id":8,
        "name": "Goldern Morning Roast",
        "price": 10.99,
        "description": "Made exclusively from 100% Arabica specialty beans, each cup promises a superior taste that traditional instant coffees can’t match. Our unique freeze-drying process locks in the aroma and depth of flavour, ensuring that you enjoy a premium coffee experience without the need for any machines.",
        "small_description": "Apple acidity, sweet orange.",
        "image": image08,
        "favor": "Good With Milk",
        "category": "coffee",
        "quantity": 100,
        "grind": "Manual Drip",
        "type":"Regular"
    },
    {
        "id":9,
        "name": "Bliss Brew",
        "price": 19.99,
        "description": "A light to medium roast with naturally sweet undertones, Bliss Brew blends perfectly with milk for a smooth, creamy cup. The delicate flavors of honey and vanilla shine through, offering a balanced sweetness that makes it ideal for milk-based drinks like lattes and macchiatos.",
        "small_description": "Sweet undertones.",
        "image": image09,
        "favor": "Good With Milk",
        "category": "coffee",
        "quantity": 100,
        "grind": "Auto Drip",
        "type":"Decaf"
    },
    {
        "id":10,
        "name": "Sencha Green Tea",
        "price": 19.99,
        "description": "Sencha is a popular Japanese green tea that boasts a light, grassy flavor with a hint of sweetness. It has a refreshing and clean profile, making it a great choice for a morning boost or an afternoon pick-me-up. Its vibrant green color and smooth finish are sure to delight.",
        "small_description": "Light, sweetness.",
        "image": image10,
        "favor": "Light Favor",
        "category": "tea",
        "quantity": 100,
        "form": "Pound",
        "type":"Tea Bag"
    },
    {
        "id":11,
        "name": "White Tea",
        "price": 17.99,
        "description": "Known for its delicate flavor, white tea is made from young tea leaves and buds. It offers a subtle sweetness and a light, airy aroma, making it a refreshing choice. Its gentle taste is perfect for those who prefer a mild and soothing tea experience.",
        "small_description": "Delicate, light, airy aroma.",
        "image": image11,
        "favor": "Light Favor",
        "category": "tea",
        "quantity": 100,
        "form": "Bags",
        "type":"Tea Bag"
    },
    {
        "id":12,
        "name": "Chamomile Tea",
        "price": 29.99,
        "description": "Chamomile tea is made from dried chamomile flowers and is known for its light, floral flavor. It has a naturally soothing quality, often enjoyed for its calming effects. With its gentle sweetness and subtle apple-like notes, chamomile is perfect for winding down at any time of the day.",
        "small_description": "Sweetness, apply favor.",
        "image": image12,
        "favor": "Light Favor",
        "category": "tea",
        "quantity": 100,
        "form": "Tin Can",
        "type":"Powdered Tea"
    },
    {
        "id":13,
        "name": "Black Tea Assam",
        "price": 22.99,
        "description": "Assam black tea is renowned for its robust and malty flavor. Grown in the Assam region of India, it has a bold character that is perfect for those who enjoy a strong cup of tea. Its rich, dark color and full-bodied taste make it an excellent choice for breakfast teas, often enjoyed with milk and sugar.",
        "small_description": "Robust and malty flavor.",
        "image": image13,
        "favor": "Strong Favor",
        "category": "tea",
        "quantity": 100,
        "form": "Bags",
        "type":"Powdered Tea"
    },
    {
        "id":14,
        "name": "Earl Grey",
        "price": 21.99,
        "description": "Earl Grey is a classic black tea flavored with bergamot oil, giving it a distinctive and aromatic flavor profile. The strong black tea base combined with the citrusy notes of bergamot creates a bold and refreshing cup, perfect for tea lovers who appreciate a fragrant and flavorful experience.",
        "small_description": "Distinctive and aromatic flavor.",
        "image": image14,
        "favor": "Strong Favor",
        "category": "tea",
        "quantity": 100,
        "form": "Pound",
        "type":"Tea Bag"
    },
    {
        "id":15,
        "name": "Pu-erh Tea",
        "price": 29.99,
        "description": "Pu-erh is a fermented dark tea from China known for its earthy and complex flavor. Its strong, rich taste often includes notes of leather, wood, and a slight sweetness. Pu-erh is unique because it improves with age, making each sip a journey through its deep and layered flavors. It’s an excellent choice for those who enjoy a hearty and distinctive tea experience.",
        "small_description": "Earthy and complex flavor.",
        "image": image15,
        "favor": "Strong Favor",
        "category": "tea",
        "quantity": 100,
        "form": "Bags",
        "type":"Powdered Tea"
    },
    {
        "id":16,
        "name": "Longjing Green Tea",
        "price": 17.99,
        "description": "A celebrated Chinese green tea, Dragon Well is known for its flat, sword-shaped leaves and distinctive nutty, sweet flavor. It has a smooth, mellow profile with a hint of chestnut and a subtle vegetal note, making it a favorite among tea connoisseurs.",
        "small_description": "Smooth, mellow profile.",
        "image": image16,
        "favor": "Special leaf",
        "category": "tea",
        "quantity": 100,
        "form": "Tin Can",
        "type":"Tea Bag"
    },
    {
        "id":17,
        "name": "Jasmine Green Tea",
        "price": 19.19,
        "description": "This fragrant tea combines high-quality green tea leaves with jasmine flowers, resulting in a floral aroma and a delicate, sweet flavor. The scent is infused during the tea-making process, making it a truly special experience. It is perfect for those who enjoy a soothing and aromatic cup.",
        "small_description": "Soothing and aromatic cup.",
        "image": image17,
        "favor": "Special leaf",
        "category": "tea",
        "quantity": 100,
        "form": "Bags",
        "type":"Tea Bag"
    },
    {
        "id":18,
        "name": "Hibiscus Tea",
        "price": 29.79,
        "description": "Made from the dried calyces of the hibiscus flower, this herbal tea has a tart, tangy flavor similar to cranberry. It’s vibrant red in color and can be enjoyed hot or iced. Hibiscus tea is often praised for its health benefits, including its ability to support heart health and lower blood pressure.",
        "small_description": "For healthy.",
        "image": image18,
        "favor": "Special leaf",
        "category": "tea",
        "quantity": 100,
        "form": "Bags",
        "type":"Powdered Tea"
    },
    {
        "id":19,
        "name": "Arabica",
        "price": 5.99,
        "description": "Arabica is the most popular coffee bean, known for its smooth flavor and aromatic qualities. It typically has a mild, fruity taste with a slight acidity.",
        "small_description": "Smooth and aromatic.",
        "image": image19,
        "category": "bean and seed",
        "quantity": 100,
        "type":"Coffee bean"
    },
    {
        "id":20,
        "name": "Robusta",
        "price": 6.79,
        "description": "Robusta beans are stronger and more bitter than Arabica, often used in espresso blends. They have higher caffeine content and a bold, earthy flavor.",
        "small_description": "Bold, earthy flavor with high caffeine.",
        "image": image20,
        "category": "bean and seed",
        "quantity": 100,
        "type":"Coffee bean"
    },
    {
        "id":21,
        "name": "Liberica",
        "price": 4.99,
        "description": "Liberica beans are less common, offering a unique smoky, woody flavor. They tend to have a fuller body and are known for their complex taste profile.",
        "small_description": "Unique smoky, woody flavor.",
        "image": image21,
        "category": "bean and seed",
        "quantity": 100,
        "type":"Coffee bean"
    },
    {
        "id":22,
        "name": "Excelsa",
        "price": 6.99,
        "description": "Excelsa, a member of the Liberica family, has a tart, fruity taste. It is often used to add complexity and depth to coffee blends.",
        "small_description": "Tart, fruity flavor",
        "image": image22,
        "category": "bean and seed",
        "quantity": 100,
        "type":"Coffee bean"
    },
    {
        "id":23,
        "name": "Assam",
        "price": 6.99,
        "description": " Assam tea is a black tea grown in the Assam region of India. It is known for its strong, malty flavor and rich, deep color. Often used in breakfast blends, it is popular for its robust taste.",
        "small_description": "Bold and malty",
        "image": image23,
        "category": "bean and seed",
        "quantity": 100,
        "type":"Tea leaf"
    },
    {
        "id":24,
        "name": "Darjeeling",
        "price": 2.99,
        "description": "Darjeeling tea is often referred to as the champagne of teas due to its light, floral flavor with hints of muscatel. Grown in the Darjeeling region of India, it can be enjoyed as black, green, or oolong tea.",
        "small_description": "Light, floral with muscatel notes",
        "image": image24,
        "category": "bean and seed",
        "quantity": 100,
        "type":"Tea leaf"
    },
    {
        "id":25,
        "name": "Sencha",
        "price": 7.99,
        "description": "Sencha is a popular Japanese green tea, known for its fresh, grassy flavor and slightly sweet undertones. It is steamed to prevent oxidation, retaining its vibrant green color.",
        "small_description": "Fresh, grassy flavor",
        "image": image25,
        "category": "bean and seed",
        "quantity": 100,
        "type":"Tea leaf"
    },
    {
        "id":26,
        "name": "Pu-erh",
        "price": 3.99,
        "description": " Pu-erh tea is a fermented tea from China, offering a rich, earthy flavor. It improves with age, like wine, and is prized for its medicinal properties and unique taste.",
        "small_description": " Rich, earthy, and fermented",
        "image": image26,
        "category": "bean and seed",
        "quantity": 100,
        "type":"Tea leaf"
    },
    {
        "id":27,
        "name": "Tieguanyin (Iron Goddess)",
        "price": 9.99,
        "description": "Tieguanyin is a famous oolong tea from China, celebrated for its floral aroma and smooth, creamy texture. It has a complex taste, blending sweetness with subtle roasted notes.",
        "small_description": "Floral and creamy",
        "image": image27,
        "category": "bean and seed",
        "quantity": 100,
        "type":"Tea leaf"
    },
]
export default all_product;