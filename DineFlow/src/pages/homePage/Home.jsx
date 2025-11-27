import React from "react";
import "../../style/home.css";


const Home = () => {

  const testimonials = [
    {
      id: 1,
      text: "DineFlow has completely transformed our operations. Orders are smoother, and our kitchen staff loves real-time tracking. Highly recommend!",
      name: "Alice Johnson",
      role: "Restaurant Owner",
      avatar: "https://i.pravatar.cc/150?u=alice",
    },
    {
      id: 2,
      text: "The digital menu is fantastic! Customers love the easy browsing and ordering. It's made a huge difference.",
      name: "Bob Williams",
      role: "Head Chef",
      avatar: "https://i.pravatar.cc/150?u=bob",
    },
    {
      id: 3,
      text: "Efficiency is key in our diner, and DineFlow delivers. Billing is quick and dashboards give great insights.",
      name: "Charlie Davis",
      role: "Operations Manager",
      avatar: null,
    },
  ];

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("");

  return (
    <>
      {/* -------------------- HERO SECTION -------------------- */}
      <section className="hero">
            {/* Layer 1 overlay */}
            <div className="overlay"></div>

            {/* Content */}
            <div className="hero-content">
                <h1>
                    Savor the Moment,
                    <br />
                    Streamline Your Dine
                </h1>

                <p>
                    Experience culinary excellence with DineFlow, your ultimate partner in
                    modern restaurant management and delightful dining.
                </p>

                <div className="buttons">
                    <button className="btn-light">View Menu</button>
                    <button className="btn-primary">Order Now</button>
                </div>
            </div>

            {/* Footer text */}
        </section>

      {/* -------------------- ABOUT SECTION -------------------- */}
      <section className="about-section">
        <h2>Our Passion for Perfect Dining</h2>
        <p className="about-text">
          At FoodFlow, we blend exceptional cuisine with seamless dining efficiency.
          Our mission is to create an unforgettable experience—from kitchen precision 
          to customer satisfaction. Every dish is crafted with passion and presented with care.
        </p>
        <button className="about-btn">Learn More</button>
      </section>

      {/* -------------------- SPECIALS SECTION -------------------- */}
      <section className="specials-section">
        <h2>Today's Irresistible Specials</h2>

        <div className="specials-grid">
          {/* Card 1 */}
          <div className="special-card">
            <img src="/assets/chicken-burger.jpg" alt="Crispy burger" />
            <h3>Crispy Fried Chicken Burger</h3>
            <p>A crunchy delight with fresh veggies and signature mayo.</p>
            <div className="special-footer">
              <span>$8.50</span>
              <button>Order</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="special-card">
            <img src="/images/seafood-pasta.jpg" alt="Seafood Pasta" />
            <h3>Signature Seafood Pasta</h3>
            <p>Classic Italian pasta with fresh seafood flavors.</p>
            <div className="special-footer">
              <span>$12.50</span>
              <button>Order</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="special-card">
            <img src="/images/pizza.jpg" alt="Veg Pizza" />
            <h3>Gourmet Vegetarian Pizza</h3>
            <p>Loaded with veggies, cheese, and Italian herbs.</p>
            <div className="special-footer">
              <span>$10.00</span>
              <button>Order</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="special-card">
            <img src="/images/choco-lava.jpg" alt="Chocolate Lava Cake" />
            <h3>Chocolate Lava Cake</h3>
            <p>Molten chocolate with soft sponge sweetness.</p>
            <div className="special-footer">
              <span>$6.75</span>
              <button>Order</button>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- TESTIMONIALS -------------------- */}
      <section className="feedback-section">
      <h2 className="feedback-heading">What Our Diners Say</h2>

      <div className="feedback-grid">
        {testimonials.map((t) => (
          <div key={t.id} className="feedback-card">
            <p className="feedback-text">"{t.text}"</p>

            <div className="feedback-user-row">
              {t.avatar ? (
                <img src={t.avatar} alt={t.name} className="feedback-avatar" />
              ) : (
                <div className="feedback-avatar fallback">
                  {getInitials(t.name)}
                </div>
              )}

              <div>
                <p className="feedback-name">{t.name}</p>
                <p className="feedback-role">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Home;
