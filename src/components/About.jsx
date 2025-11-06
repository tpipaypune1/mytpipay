import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import { BsEnvelopeAtFill } from "react-icons/bs";
import yesbankLogo from "/images/yes.png";

const About = () => {
  const sectionRef = useRef();
  const [counters, setCounters] = useState({
    clients: 0,
    transactions: 0,
    products: 0,
    experience: 0,
  });

  const targetValues = {
    clients: 10000,
    transactions: 10,
    products: 15,
    experience: 5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounters = () => {
    Object.keys(targetValues).forEach((key) => {
      let current = 0;
      const end = targetValues[key];
      const increment = end / 50;
      const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          clearInterval(interval);
          setCounters((prev) => ({ ...prev, [key]: end }));
        } else {
          setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, 50);
    });
  };
  const teamMembers = [
    { name: "Ajeet Kumar Das", role: "Director", logo: "/images/ajitsir.jpg" },
    { name: "Bishnu Chettri", role: "Director", logo: "/images/bishnu.jpeg" },
    { name: "Bijay Mishra", role: "Legal Manager", logo: "/images/bijay.jpg" },
    { name: "Tejas Janjire", role: "Developer", logo: "/images/tejas.jpg" },
  ];

  return (
    <section id="about" className="about section-padding" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          <div className="about-text fade-in">
            <h2>About TpiPay</h2>
            <p className="lead">
              TpiPay is India’s leading fintech service provider, offering a
              wide range of essential digital services including mobile
              recharge, bill payments, money transfers, and more — all under one
              platform.
            </p>
            <p>
              We empower local retailers, agents, and entrepreneurs to deliver
              financial and utility services seamlessly, helping communities
              access banking and payment solutions easily and securely.
            </p>
            <p>
              From electricity and broadband bill payments to UPI collection and
              Aadhaar-enabled cash withdrawals, TpiPay ensures fast, secure, and
              reliable transactions across all service categories.
            </p>

            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">📲</div>
                <div className="feature-text">
                  <h4 className="feature-title">One Platform</h4>
                  <p className="feature-description">
                    Recharge, bills, UPI – all in one place
                  </p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">🔐</div>
                <div className="feature-text">
                  <h4 className="feature-title">Secure Transactions</h4>
                  <p className="feature-description">
                    End-to-end encrypted and trusted by thousands
                  </p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">⚡</div>
                <div className="feature-text">
                  <h4 className="feature-title">Instant Services</h4>
                  <p className="feature-description">
                    Fast processing with real-time confirmations
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats scale-in">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">{counters.clients}+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{counters.transactions}M+</div>
                <div className="stat-label">Transactions</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{counters.products}+</div>
                <div className="stat-label">Software Products</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{counters.experience}+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>

            <div className="trust-badges">
              <div className="badge">
                <div className="badge-icon">🏆</div>
                <span>Industry Leader</span>
              </div>
              <div className="badge">
                <div className="badge-icon">✅</div>
                <span>Certified Solutions</span>
              </div>
              <div className="badge">
                <div className="badge-icon">🌟</div>
                <span>5 Star Rating</span>
              </div>
            </div>
          </div>
        </div>
        <section className="partners mt-5">
          <div className="partners-content">
            <h2>Meet Our Team</h2>
            <div className="partners-row-wrapper team-carousel">
              <div className="partners-row team-track">
                {[
                  {
                    name: "Ajeet Kumar Das",
                    role: "Director",
                    logo: "/images/ajitsir.jpg",
                  },
                  {
                    name: "Bishnu Chettri",
                    role: "Director",
                    logo: "/images/bishnu.jpeg",
                  },
                  {
                    name: "Bijay Mishra",
                    role: "Legal Manager",
                    logo: "/images/bijay.jpg",
                  },
                  {
                    name: "SUBHADRA BEHERA",
                    role: "Senior Sales Manager",
                    logo: "/images/sub.jpg",
                  },
                  // { name: 'MANASWINI DASH', role: ' Account Head', logo: '/images/man.jpg' },
                  // { name: 'RASHMI RANJAN SATPATHY', role: 'Company Secretary', logo: '/images/bijay.jpg' },

                  {
                    name: "Tejas Janjire",
                    role: "Software Developer",
                    logo: "/images/tejas.jpg",
                  },
                ]
                  // duplicate for smooth loop
                  .concat([
                    {
                      name: "AJEET KUMAR DAS",
                      role: "Director",
                      logo: "/images/ajitsir.jpg",
                    },
                    {
                      name: "BISHNU CHETTRI",
                      role: "Director",
                      logo: "/images/bishnu.jpeg",
                    },
                    {
                      name: "BIJAY MISHRA",
                      role: "Legal Manager",
                      logo: "/images/bijay.jpg",
                    },
                    {
                      name: "SUBHADRA BEHERA",
                      role: "Senior Sales Manager",
                      logo: "/images/sub.jpg",
                    },
                    // { name: 'MANASWINI DASH', role: 'Account Head', logo: '/images/man.jpg' },

                    // { name: 'RASHMI RANJAN SATPATHY', role: 'Company Secretary', logo: '/images/bijay.jpg' },
                    {
                      name: "TEJAS JANJIRE",
                      role: "Software Developer",
                      logo: "/images/tejas.jpg",
                    },
                  ])
                  .map((member, index) => (
                    <div key={index} className="partner-card team-card">
                      <img
                        src={member.logo}
                        alt={member.name}
                        className="partner-logo team-photo"
                      />
                      <p>{member.name}</p>
                      <span className="team-role">{member.role}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        <div className="company-info fade-in mt-5">
          <h3 className="info-title">Company Registration & Certifications</h3>
          <div className="certification-cards">
            <div className="cert-card">
              <h4>Registration Number</h4>
              <p>U62099OD2024PTC045666</p>
            </div>
            <div className="cert-card">
              <h4>ISO Certified</h4>
              <p>ISO 9001:2015</p>
            </div>
            <div className="cert-card">
              <h4>License Number</h4>
              <p>TL-2025/63735</p>
            </div>
          </div>
        </div>

        {/* <section className="partners mt-5">
          <div className="partners-content">
            <h2>Our Banking Partners</h2>
            <div className="partners-row-wrapper">
              <div className="partners-row">
                {[
                  { name: 'Ajeet Kumar Das', role: 'Director', logo: '/images/ajitsir.jpg' },
                  { name: 'Bishnu Chettri', role: 'Director', logo: '/images/bishnu.jpeg' },
                  { name: 'Bijay Mishra', role: 'Legal Manager', logo: '/images/bijay.jpg' },
                  { name: 'Tejas Janjire', role: 'Developer', logo: '/images/tejas.jpg' },
                ].map((partner, index) => (
                  <div key={index} className="partner-card">
                    <img src={partner.logo} alt={partner.name} className="partner-logo" />
                    <p>{partner.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        <section className="partners mt-5">
          <div className="partners-content">
            <h2>Our Banking Partners</h2>
            <div className="partners-row-wrapper">
              <div className="partners-row">
                {[
                  { name: "Yes Bank", logo: "/images/yes.png" },
                  { name: "IDFC First Bank", logo: "/images/idfc.png" },
                  { name: "RBL Bank", logo: "/images/rbl.png" },
                  { name: "AU Bank", logo: "/images/au.png" },
                  { name: "Kotak Mahindra Bank", logo: "/images/kotak.png" },
                  { name: "Axis Bank", logo: "/images/axis.png" },
                  { name: "HDFC Bank", logo: "/images/hdfc.png" },
                  { name: "IndusInd Bank", logo: "/images/indusind.png" },
                  { name: "Yes Bank", logo: "/images/yes.png" },
                  { name: "RBL Bank", logo: "/images/rbl.png" },
                  { name: "AU Bank", logo: "/images/au.png" },
                  { name: "Kotak Mahindra Bank", logo: "/images/kotak.png" },
                ].map((partner, index) => (
                  <div key={index} className="partner-card">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="partner-logo"
                    />
                    <p>{partner.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
