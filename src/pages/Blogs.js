import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import BlogsCard from '../components/BlogsCard'
import Manali from '../images/manali.jpg'
import Goa from '../images/goa.jpg'
import Singapore from '../images/singapore.jpg'
import Pizza from '../images/pizza.jpg'
import Biryani from '../images/biryani.jpg'
import Rosogulla from '../images/rosogulla.jpg'
import Python from '../images/python.jpg'
import Java from '../images/java.jpg'
import Ar from '../images/ar.jpg'
import Robotics from '../images/robotics.jpg'
import Marketing from '../images/marketing.jpg'
import Teddy from '../images/teddy.jpg'
import Teddy1 from '../images/teddy1.jpg'



// import NavBar from '../components/NavBar'

const Blogs = () => {
  const [cards,setCards] = useState("travel");
  return (
    <div>
        <NavBar color="#e8e3de"/>
        <div className='blogPage'>
          <div className="blogTitle"> 
              <span className="blogs">BLOGS</span>
              <ul className='blogLinks'>
                  <li onClick={() => setCards("travel")} style={{fontWeight: (cards==="travel")?"bold":"normal"}}>TRAVEL</li>
                  <li onClick={() => setCards("food")} style={{fontWeight: (cards==="food")?"bold":"normal"}}>FOOD</li>
                  <li onClick={() => setCards("programming")} style={{fontWeight: (cards==="programming")?"bold":"normal"}}>PROGRAMMING</li>
                  <li onClick={() => setCards("technology")} style={{fontWeight: (cards==="technology")?"bold":"normal"}}>TECHNOLOGY</li>
                  <li onClick={() => setCards("business")} style={{fontWeight: (cards==="business")?"bold":"normal"}}>BUSINESS</li>
              </ul>
          </div>
          <div className='blogCont'>
              <BlogsCard genre="travel" blogtype={cards} image={Manali} alt="Manali" title="MANALI, HP" des="Manali is a high-altitude Himalayan resort town in India's northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination." writer="- Ravi"/>
              <BlogsCard genre="travel" blogtype={cards} image={Goa} alt="Goa" title="GOA" des="Goa is a state in western India with coastlines stretching along the Arabian Sea.It is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing village." writer="- Vicky"/>
              <BlogsCard genre="travel" blogtype={cards} image={Singapore} alt="Singapore" title="SINGAPORE" des="Singapore,[e] officially the Republic of Singapore, is an island country and city-state in maritime Southeast Asia. It is located about one degree of latitude (137 kilometres or 85 miles)." writer="- Harshit"/>
              <BlogsCard genre="food" blogtype={cards} image={Pizza} alt="Pizza" title="PIZZA" des="Pizza is a traditional Italian dish typically consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients, baked at a high temperature, traditionally in a wood-fired oven." writer="- Harshit"/>
              <BlogsCard genre="food" blogtype={cards} image={Biryani} alt="Biryani" title="BIRYANI" des="Singapore,[e] officially the Republic of Singapore, is an island country and city-state in maritime Southeast Asia. It is located about one degree of latitude (137 kilometres or 85 miles)." writer="- Harshit"/>
              <BlogsCard genre="food" blogtype={cards} image={Rosogulla} alt="Rosogulla" title="ROSOGULLA" des="Singapore,[e] officially the Republic of Singapore, is an island country and city-state in maritime Southeast Asia. It is located about one degree of latitude (137 kilometres or 85 miles)." writer="- Harshit"/>
              <BlogsCard genre="programming" blogtype={cards} image={Python} alt="Python" title="PYTHON" des="Singapore,[e] officially the Republic of Singapore, is an island country and city-state in maritime Southeast Asia. It is located about one degree of latitude (137 kilometres or 85 miles)." writer="- Harshit"/>
              <BlogsCard genre="programming" blogtype={cards} image={Java} alt="Java" title="JAVA" des="Singapore,[e] officially the Republic of Singapore, is an island country and city-state in maritime Southeast Asia. It is located about one degree of latitude (137 kilometres or 85 miles)." writer="- Harshit"/>
              <BlogsCard genre="technology" blogtype={cards} image={Ar} alt="AR" title="AUGMENTED REALITY" des="Singapore,[e] officially the Republic of Singapore, is an island country and city-state in maritime Southeast Asia. It is located about one degree of latitude (137 kilometres or 85 miles)." writer="- Harshit"/>
              <BlogsCard genre="technology" blogtype={cards} image={Robotics} alt="Robotics" title="ROBOTICS" des="Singapore,[e] officially the Republic of Singapore, is an island country and city-state in maritime Southeast Asia. It is located about one degree of latitude (137 kilometres or 85 miles)." writer="- Harshit"/>
              <BlogsCard genre="business" blogtype={cards} image={Marketing} alt="Marketing" title="Marketing" des="Singapore,[e] officially the Republic of Singapore, is an island country and city-state in maritime Southeast Asia. It is located about one degree of latitude (137 kilometres or 85 miles)." writer="- Harshit"/>
              <BlogsCard genre="business" blogtype={cards} image={Teddy} alt="Teddy" title="TEDDY" des="Singapore,[e] officially the Republic of Singapore, is an island country and city-state in maritime Southeast Asia. It is located about one degree of latitude (137 kilometres or 85 miles)." writer="- Harshit"/>
              <BlogsCard genre="business" blogtype={cards} image={Teddy1} alt="Teddy" title="TEDDY" des="Singapore,[e] officially the Republic of Singapore, is an island country and city-state in maritime Southeast Asia. It is located about one degree of latitude (137 kilometres or 85 miles)." writer="- Harshit"/>
          </div>
        </div>
    </div>
  )
}

export default Blogs