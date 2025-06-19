import React, { useState, useEffect } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
    
    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto,w_1400/v1736227584/vendor/2523/catalog/product/2/0/202506132552_file_m5ljwr7fc1316ma",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "15"
                },
                {
                    name: "Spider Plant",
                    image: "https://hips.hearstapps.com/hmg-prod/images/beautiful-spider-plant-chlorophytum-isolated-in-a-royalty-free-image-1727206150.jpg?crop=0.668xw:1.00xh;0,0&resize=1120:*",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "12"
                },
                {
                    name: "Peace Lily",
                    image: "https://seedfella.com/cdn/shop/files/peace-lily-seeds-for-planting-elegant-indoor-greenery-plant-412_0eafe676-dc26-41c6-9d55-19ad4116cb9d.webp?v=1736404089",
                    description: "Removes mold spores and purifies the air.",
                    cost: "18"
                },
                {
                    name: "Boston Fern",
                    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR632tqXMVq4qPpnoGvGTnrIGTBycwPMPQQlqiiK-P7JjuULGVWRUiKYQe-fxCU3pGgvtzsWaFjK9X2W19eMQ35MQd3Vw0TyQexv6_nlw",
                    description: "Adds humidity to the air and removes toxins.",
                    cost: "20"
                },
                {
                    name: "Rubber Plant",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvCiwEXGrB_C7p4KGs81eZIYTvYsEexO2ZUi3wPbAMM6dz0o3sL3M-QaUhwc7gxlFtaGMjmvKnPUW3BuqjBHtAiA",
                    description: "Easy to care for and effective at removing toxins.",
                    cost: "17"
                },
                {
                    name: "Aloe Vera",
                    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRsrb-EX65ebih73UzPB_dgeUHURdKuzeU0_I4F3lw4Wv1OWyNviXdrOAlGfmdJmoHNZy1NdIXz4aLcrgFVq1jbBw",
                    description: "Purifies the air and has healing properties for skin.",
                    cost: "14"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "20"
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "18"
                },
                {
                    name: "Rosemary",
                    image: "https://i5.walmartimages.com/seo/Rosemary-Plants-Live-for-Planting-Rosemary-Live-Plant-Indoor-Outdoor-4-Inch-Pot_ad42af26-5dc2-455b-a101-5901f7ea27bd.54d5755bae0dce2eef5158e15a936c97.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
                    description: "Invigorating scent, often used in cooking.",
                    cost: "15"
                },
                {
                    name: "Mint",
                    image: "https://assets.epicurious.com/photos/5763132cff66dde1456dfed0/master/pass/Mint_Leaves.jpg",
                    description: "Refreshing aroma, used in teas and cooking.",
                    cost: "12"
                },
                {
                    name: "Lemon Balm",
                    image: "https://bonnieplants.com/cdn/shop/articles/BONNIE_lemon-balm_iStock-184975706-1800px_ded081e4-7cbc-4dad-834d-8cdaeb2794fe.jpg?v=1642541739&width=1000",
                    description: "Citrusy scent, relieves stress and promotes sleep.",
                    cost: "14"
                },
                {
                    name: "Hyacinth",
                    image: "https://www.dutchgrown.com/cdn/shop/products/Hyacinth_Blue_Jacket-4.jpg?v=1677680493",
                    description: "Hyacinth is a beautiful flowering plant known for its fragrant.",
                    cost: "22"
                }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "oregano",
                    image: "https://cdn.shopify.com/s/files/1/2016/2681/files/Oregano_Main_Image_condensed.jpg?v=1641340058",
                    description: "The oregano plants contains compounds that can deter certain insects.",
                    cost: "10"
                },
                {
                    name: "Marigold",
                    image: "https://www.parkseed.com/media/catalog/product/5/1/51377.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=740&width=740&canvas=740:740",
                    description: "Natural insect repellent, also adds color to the garden.",
                    cost: "8"
                },
                {
                    name: "Geraniums",
                    image: "https://www.gardenia.net/wp-content/uploads/2023/04/1RYX8vvagYKzgzRPdUndx4PFdPK0FKt7RIqFQOc8-780x520.webp",
                    description: "Known for their insect-repelling properties while adding a pleasant scent.",
                    cost: "20"
                },
                {
                    name: "Basil",
                    image: "https://www.marthastewart.com/thmb/w1f38EKcAYkVTe2JjqIccB7qOeY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ms-how-to-grow-basil-69c2254cf454424fbc55992cc8155dbe.jpg",
                    description: "Repels flies and mosquitoes, also used in cooking.",
                    cost: "9"
                },
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "20"
                },
                {
                    name: "Catnip",
                    image: "https://s7d2.scene7.com/is/image/PetSmart/5042783",
                    description: "Repels mosquitoes and attracts cats.",
                    cost: "13"
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "https://www.ikea.com/us/en/images/products/aloe-vera-potted-plant-aloe__1368841_pe957973_s5.jpg",
                    description: "Soothing gel used for skin ailments.",
                    cost: "14"
                },
                {
                    name: "Echinacea",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVAcBAtYGqmHtrTPKbX_8--ZPp_q99SPKBo1_OYMDQXIm-k8Q:https://www.northcreeknurseries.com/_ccLib/image/plants/DETA-161.jpg&s",
                    description: "Boosts immune system, helps fight colds.",
                    cost: "16"
                },
                {
                    name: "Peppermint",
                    image: "https://files.nccih.nih.gov/peppermint-steven-foster-square.jpg",
                    description: "Relieves digestive issues and headaches.",
                    cost: "13"
                },
                {
                    name: "Lemon Balm",
                    image: "https://bonnieplants.com/cdn/shop/articles/BONNIE_lemon-balm_iStock-184975706-1800px_ded081e4-7cbc-4dad-834d-8cdaeb2794fe.jpg?v=1642541739&width=1000",
                    description: "Calms nerves and promotes relaxation.",
                    cost: "14"
                },
                {
                    name: "Chamomile",
                    image: "https://i.etsystatic.com/24605184/r/il/644ab8/4295619554/il_1140xN.4295619554_l2ne.jpg",
                    description: "Soothes anxiety and promotes sleep.",
                    cost: "15"
                },
                {
                    name: "Calendula",
                    image: "https://i5.walmartimages.com/seo/Mr-Fothergill-s-Calendula-Oh-Sow-Simple-Flower-Seed_5f1aca37-4559-4435-93c8-1336a30987d9.b09a60fd95740caf97a1c29d695e2edf.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
                    description: "Heals wounds and soothes skin irritations.",
                    cost: "12"
                }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    name: "ZZ Plant",
                    image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Thrives in low light and requires minimal watering.",
                    cost: "25"
                },
                {
                    name: "Pothos",
                    image: "https://i5.walmartimages.com/seo/Pothos-Golden-Live-Plant-Indoor-Different-Houseplants-3-Pot-Real-House-Plant-Living-Room-Office-Desk-Bathroom-Epipremnum-Aureum-Devil-s-Ivy_c71a22ed-cc66-4bca-815b-3123053db364.1ee390427b9d6aed06d2767fbbbb56fe.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
                    description: "Tolerates neglect and can grow in various conditions.",
                    cost: "10"
                },
                {
                    name: "Snake Plant",
                    image: "https://i5.walmartimages.com/seo/13-Artificial-Snake-Plant-Potted-Faux-Sansevieria-Trifasciata-Plants-Tropical-Fake-Plants-in-White-Pots-Outdoor-Home-Decor_58019da6-88c6-44d8-8703-738e4c1d1738.e3c8467ef1be45efffa805dd470cd6fe.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
                    description: "Needs infrequent watering and is resilient to most pests.",
                    cost: "15"
                },
                {
                    name: "Cast Iron Plant",
                    image: "https://cdn.avasflowers.net/img/prod_img/avasflowers-potted-cast-iron-plant.png",
                    description: "Hardy plant that tolerates low light and neglect.",
                    cost: "20"
                },
                {
                    name: "Succulents",
                    image: "https://i5.walmartimages.com/asr/61c7611e-53b2-48cc-9f4e-08d30acc86fe.340b54b7b17b1256e5435d2aaa1e4bcc.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
                    description: "Drought-tolerant plants with unique shapes and colors.",
                    cost: "18"
                },
                {
                    name: "Aglaonema",
                    image: "https://i5.walmartimages.com/seo/Beauty-Aglaonema-Evergreen-4-25-Grow-Pot-Easy-Plant-Filtered-Sun-Element-by-Altman-Plants_af8073b3-3878-4d3d-a2b7-5ef4b98fd976.29d993fba334a8aa59c9e6cbcfb4b9cc.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
                    description: "Requires minimal care and adds color to indoor spaces.",
                    cost: "22"
                }
            ]
        }
    ];
    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
    }
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    }
    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    }

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };
    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://t3.ftcdn.net/jpg/02/58/62/36/360_F_258623607_a31m59gQNxn3lhw7OuuAlJwmqeeEQ90q.jpg" alt="" />
                        <a href="/" onClick={(e) => handleHomeClick(e)}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>

                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plants</a></div>
                    <div> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}><h1 className='cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path></svg></h1></a></div>
                </div>
            </div>
            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => ( // Loop through each category in plantsArray
  <div key={index}> {/* Unique key for each category div */}
    <h1>
      <div>{category.category}</div> {/* Display the category name */}
    </h1>
    <div className="product-list"> {/* Container for the list of plant cards */}
      {category.plants.map((plant, plantIndex) => ( // Loop through each plant in the current category
        <div className="product-card" key={plantIndex}> {/* Unique key for each plant card */}
          <img 
            className="product-image" 
            src={plant.image} // Display the plant image
            alt={plant.name} // Alt text for accessibility
          />
          <div className="product-title">{plant.name}</div> {/* Display plant name */}
          {/* Display other plant details like description and cost */}
          <div className="product-description">{plant.description}</div> {/* Display plant description */}
          <div className="product-cost">${plant.cost}</div> {/* Display plant cost */}
          <button
            className="product-button"
            onClick={() => handleAddToCart(plant)} // Handle adding plant to cart
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}
export default ProductList;
