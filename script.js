document.addEventListener("DOMContentLoaded", function () {
  // Load the home content by default
  loadContent("home");

  // FAQ toggle functionality
  initializeFAQ();
});

// Function to load content dynamically
function loadContent(page) {
  let contentDiv = document.getElementById("content");
  contentDiv.classList.add("fade-out"); // Add fade-out animation

  setTimeout(() => {
    // Load the appropriate content based on the clicked link
    switch (page) {
      case "home":
        contentDiv.innerHTML = `
          <h1>Welcome to NexWave Data Solutions</h1>
          <p>Your Partner in Data Analytics, Machine Learning, and App Development</p>
          <img src="C:/Users/muran/Downloads/anal2.jpg" alt="Technology Background">
          <h2>Our Latest Blogs</h2>
          <div class="blog-item">
            <h3>Machine Learning</h3>
            <p>Explore the fascinating world of machine learning and its applications in various industries.</p>
            <button onclick="loadContent('contact')">Contact Us for More</button>
          </div>
          <div class="blog-item">
            <h3>Data Analytics</h3>
            <p>Learn how data analytics can drive your business decisions and improve operational efficiency.</p>
            <button onclick="loadContent('contact')">Contact Us for More</button>
          </div>
          <div class="blog-item">
            <h3>Predictive Modeling</h3>
            <p>Understand the role of predictive modeling in forecasting trends and making data-driven decisions.</p>
            <button onclick="loadContent('contact')">Contact Us for More</button>
          </div>
        `;
        break;
        case "about-us":
          contentDiv.innerHTML = `
              <h2>About Us</h2>
              <p>Welcome to NexWave Data Solutions, your premier partner in data analytics and predictive modeling, headquartered in Nairobi, Kenya.</p>
              <p>We are a leading firm specializing in advanced data analytics, machine learning, and business intelligence.</p>

              <h3>NexWave Data Solutions: Empowering Global Change Through Data and Technology</h3>
              <p>At NexWave Data Solutions, we are driven by a singular vision: to harness the transformative power of technology and data to catalyze global change. Under the visionary leadership of our founder and CEO, Mike Murango, we strive to revolutionize how businesses approach the world's most pressing challenges.</p>
              
              <h4>Our Mission</h4>
              <p>Our mission is to empower organizations across all sectors with cutting-edge data analytics, artificial intelligence, and machine learning solutions. We believe that by unlocking the potential of data, we can drive innovation, sustainability, and positive societal impact on a global scale.</p>
              
              <h4>Our Approach</h4>
              <ul>
                  <li><strong>Innovation at the Core:</strong> We constantly push the boundaries of what's possible in data science and technology. Our team of expert data scientists, engineers, and developers work tirelessly to develop novel solutions that address complex business and societal challenges.</li>
                  <li><strong>Ethical Data Practices:</strong> We are committed to the responsible and ethical use of data. Our solutions are designed with privacy, security, and transparency at their core, ensuring that we build trust with our clients and the communities they serve.</li>
                  <li><strong>Collaborative Partnerships:</strong> We believe in the power of collaboration. By forming strong partnerships with our clients, academic institutions, and industry leaders, we create an ecosystem of innovation that drives mutual growth and success.</li>
                  <li><strong>Sustainable Solutions:</strong> Our technologies are developed with sustainability in mind. We aim to create solutions that not only solve immediate business needs but also contribute to long-term environmental and social sustainability.</li>
                  <li><strong>Empowering Education:</strong> We are dedicated to sharing our knowledge and expertise. Through workshops, training programs, and community outreach, we aim to build data literacy and empower the next generation of data scientists and technologists.</li>
              </ul>
              
              <h4>Our Impact</h4>
              <p>For Years, NexWave Data Solutions has:</p>
              <ul>
                  <li>Helped numerous businesses to leverage data for strategic decision-making and growth.</li>
                  <li>Developed AI solutions that have improved healthcare outcomes in underserved communities.</li>
                  <li>Created predictive models that have enhanced agricultural yields, contributing to food security in various regions.</li>
                  <li>Implemented data protection systems that have safeguarded millions of individuals' personal information.</li>
                  <li>Launched initiatives to increase STEM education and data literacy in local communities.</li>
              </ul>
              
              <h4>Looking to the Future</h4>
              <p>As we look to the future, NexWave Data Solutions remains committed to our vision of using data and technology as forces for positive change. We continue to invest in research and development, nurture talent, and forge new partnerships that will allow us to tackle even greater challenges.</p>
          `;
        break;
      case "management":
        contentDiv.innerHTML = `
          <h2>Our Management</h2>
          <div class="management-info">
            <img src="C:/Users/muran/Downloads/passport.jpg" alt="CEO Mike Murango" class="ceo-img">
            <h3>Mike Murango, CEO</h3>
            <p>At NexWave Data Solutions, we are driven by a singular vision: to harness the transformative power of technology and data to catalyze global change.</p>
            <p>Under the leadership of our founder and CEO, Mike Murango, we strive to revolutionize how businesses approach the world’s most pressing challenges.</p>
            <p>When I founded NexWave Data Solutions, I was driven by a simple yet powerful idea: that the confluence of data and technology could be a catalyst for transformative change in Africa and beyond. Today, I'm proud to say that this idea has blossomed into a reality that's exceeding even our boldest dreams.</p>
            <p>At NexWave, we're not just a data analytics company. We're dreamers, innovators, and problem-solvers. We believe that within every dataset lies the potential for groundbreaking discoveries, more efficient processes, and solutions to some of the world's most pressing challenges.</p>
            <p>Our team of brilliant data scientists, engineers, and developers wake up every day with a singular mission: to harness the power of data to drive positive change. Whether it's optimizing supply chains to reduce waste, developing predictive models to improve healthcare outcomes, or creating AI solutions to enhance agricultural yields, we're committed to using our expertise to make a tangible difference.</p>
    
            </div>
        `;
        break;
      case "services":
        contentDiv.innerHTML = `
          <h2>Our Services</h2>
          <div class="services-grid">
            <div class="service-box">
              <img src="C:/Users/muran/Downloads/ANALYTIC.png" alt="Data Analytics">
              <h3>Data Analytics</h3>
              <p>Transform raw data into actionable insights to drive your business forward.</p>
            </div>
            <div class="service-box">
              <img src="C:/Users/muran/Downloads/prediction.jpg" alt="Predictive Analytics">
              <h3>Predictive Analytics</h3>
              <p>Utilize historical data to predict future trends and make data-driven decisions.</p>
            </div>
            <div class="service-box">
              <img src="C:/Users/muran/Downloads/machine learning.jpg" alt="Machine Learning & AI">
              <h3>Machine Learning & AI</h3>
              <p>Leverage advanced algorithms to build intelligent systems that learn and adapt.</p>
            </div>
            <div class="service-box">
              <img src="C:/Users/muran/Downloads/web.png" alt="Web Development">
              <h3>Web Development</h3>
              <p>Develop responsive and scalable websites tailored to your business needs.</p>
            </div>
            <div class="service-box">
              <img src="C:/Users/muran/Downloads/app.png" alt="Mobile App Development">
              <h3>Mobile App Development</h3>
              <p>Create user-friendly mobile applications for both Android and iOS platforms.</p>
            </div>
            <div class="service-box">
              <img src="C:/Users/muran/Downloads/ODPC Social media banner (1).jpg" alt="Data Protection Services">
              <h3>Data Protection Services</h3>
              <p>Data controller and processor registration, audits, and training to ensure compliance with data protection regulations.</p>
            </div>
            <div class="service-box">
              <img src="C:/Users/muran/Downloads/cybersecurity.jpg" alt="Cybersecurity Services">
              <h3>Cybersecurity Services</h3>
              <p>Protect your digital assets with our comprehensive cybersecurity solutions.</p>
            </div>
          </div>
        `;
        break;
      case "contact":
        contentDiv.innerHTML = `
          <h2>Contact Us</h2>
          <form id="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            
            <button type="submit">Send Message</button>
          </form>
        `;
        break;
      case "terms":
        contentDiv.innerHTML = `
          <h2>Terms & Conditions</h2>
          <p>By accessing and using this website, you agree to be bound by the following legally enforceable terms and conditions:</p>
          <h3>Changes</h3>
          <p>NexWave Data Solutions reserves the right to modify, suspend, or discontinue this website and its content at any time without prior notice. We may also update, add, or remove provisions to these Terms & Conditions as needed, so please revisit this page periodically to stay informed.</p>
          <h3>Rights</h3>
          <p>NexWave Solutions has the sole discretion to immediately terminate or restrict your access to this website if we suspect any breaches or violations of these Terms & Conditions, or other incorporated agreements/guidelines, or upon requests by law enforcement, government agencies, or for any other reason we deem appropriate. We are not liable for any such termination or restriction.</p>
          <h3>Copyright</h3>
          <p>The content of this website, including text, images, graphics, videos, logos, and icons, is the exclusive property of NexWave Data Solutions and/or its affiliates, and is protected by copyright laws. Using this content for commercial purposes without prior permission is strictly prohibited. Unauthorized use of any information from this website may violate copyright, trademark, and other applicable laws.</p>
          <h3>Use of Site Content</h3>
          <p>NexWave Data Solutions grants you a limited, non-exclusive, and revocable license to access, browse, and download the provided marketing content for internal and business use, provided that you comply with these Terms & Conditions and do not modify the content in any way, including retention of all copyright and proprietary notices. Any other use of this website's content without NexWave data Solutions's prior consent is strictly prohibited.</p>
          <h3>Trademarks</h3>
          <p>The name "NexWave Data Solutions" and "NexWave Data Solutions" logos shall not be used in any way, published, or advertised without prior permission from NexWave Solutions. Unauthorized use of trademarks and logos may constitute an infringement of intellectual property rights.</p>
          <h3>Viruses</h3>
          <p>NexWave Data Solutions does not guarantee that this website will be secure or free from bugs or viruses. You are responsible for configuring your information technology, computer programs, and platform to access this website. You should use your own virus protection software. NexWave Data Solutions will not be liable for any loss or damage caused by a virus or other technologically harmful material that may infect your computer equipment, computer programs, data, or other proprietary material due to your use of this website or to your downloading of any material posted on it, or any website linked to it.</p>
          <h3>Privacy and Cookies</h3>
          <p>The collection and use of your personal information through this website are governed by our Privacy Policy.</p>
          <p>By continuing to use this website, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please refrain from using this website.</p>
        `;
        break;
      case "privacy":
        contentDiv.innerHTML = `
          <h2>Privacy Policy</h2>
          <p>This Privacy Policy, effective January 1, 2023, outlines how NexWave Solutions (“we” or “us”) manages personal information on our website, www.NexWavedatasolutions.io. We prioritize the protection of your data and adhere to applicable data protection laws.</p>
          <p>This policy details our practices regarding the collection, use, and sharing of personal information. It does not apply to the practices of third parties or websites linked from our site.</p>
          <h3>Information Collection</h3>
          <p>We collect the following types of information:</p>
          <ul>
            <li>Personal Identifiable Information (PII): Name, email address, and contact details submitted through our forms.</li>
            <li>Usage Data: Information about how you use our website, such as pages visited and time spent on the site.</li>
          </ul>
          <h3>Use of Information</h3>
          <p>We use the information collected to:</p>
          <ul>
            <li>Provide and improve our services.</li>
            <li>Communicate with you, including responding to inquiries.</li>
            <li>Analyze website usage and optimize our content.</li>
          </ul>
          <h3>Information Sharing</h3>
          <p>We do not share personal information with third parties, except:</p>
          <ul>
            <li>To comply with legal obligations.</li>
            <li>To protect our rights and safety.</li>
          </ul>
          <h3>Security</h3>
          <p>We implement reasonable security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure.</p>
          <h3>Cookies</h3>
          <p>We use cookies to enhance your experience on our website. Cookies are small text files stored on your device that help us track your preferences and usage. You can manage cookies through your browser settings.</p>
          <h3>Your Rights</h3>
          <p>You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us at support@NexWavedatasolutions.io.</p>
          <p>By using our website, you agree to the terms of this Privacy Policy. We may update this policy from time to time, and any changes will be posted on this page. Please review it regularly.</p>
          <h3>Changes to This Policy</h3>
          <p>We may update this policy to reflect changes in our practices or legal requirements. We encourage you to review this page periodically to stay informed about our privacy practices.</p>
        `;
        break;
      // Other cases remain unchanged
      case "faq":
        contentDiv.innerHTML = `
          <h2>Frequently Asked Questions</h2>
          <div class="faq-container">
            <div class="faq-item">
              <h3 class="faq-question">What services does NexWave Data Solutions offer?</h3>
              <div class="faq-content">
                <p>We offer a wide range of services including:</p>
                <ul>
                  <li>Data Analytics</li>
                  <li>Predictive Analytics</li>
                  <li>Machine Learning & AI</li>
                  <li>Web Development</li>
                  <li>Mobile App Development</li>
                  <li>Data Protection Services</li>
                  <li>Cybersecurity Services</li>
                </ul>
              </div>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Which industries do you serve?</h3>
              <div class="faq-content">
                <p>We provide solutions for various industries, including:</p>
                <ul>
                  <li>Finance</li>
                  <li>Healthcare</li>
                  <li>E-commerce</li>
                  <li>IT and Technology</li>
                  <li>Agriculture</li>
                  <li>Small and Medium Enterprises (SMEs)</li>
                </ul>
              </div>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">What is your approach to ethics in data handling?</h3>
              <div class="faq-content">
                <p>At NexWave Data Solutions, we prioritize ethical data handling practices. This includes:</p>
                <ul>
                  <li>Ensuring data privacy and security</li>
                  <li>Transparent data collection and usage policies</li>
                  <li>Compliance with data protection regulations</li>
                  <li>Responsible AI development and deployment</li>
                  <li>Regular ethical audits of our processes</li>
                </ul>
              </div>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">How can I contact NexWave Data Solutions for services?</h3>
              <div class="faq-content">
                <p>You can get in touch with us through the following methods:</p>
                <ul>
                  <li>Fill out the contact form on our website</li>
                  <li>Email us at info@NexWavedatasolutions.io</li>
                  <li>Call our office at +254 791 303 899 /Whatsapp  +254 791 234 034</li>
                  <li>Visit our office at The Foundry, Westlands, Nairobi, Kenya (by appointment)</li>
                </ul>
                <p>Our team will respond to your inquiry within 24-48 hours.</p>
                  </ul>
                </div>
              </div>
                    <div class="faq-item">
                        <h3>Can you help integrate data science into our current systems?</h3>
                        <p>Yes, we provide solutions to seamlessly integrate data science into existing systems and processes.</p>
                    </ul>
                  </div>
              </div>
                    <div class="faq-item">
                        <h3>How can your company empower my business to leverage data effectively?</h3>
                      <div class="faq-content">  <p>We offer tailored data analytics and machine learning solutions designed to maximize your data potential and drive business growth.</p>
                    </div>
                  </div>
                </div>
        `;
        break;
      default:
        contentDiv.innerHTML = "<p>Page not found.</p>";
    }
    contentDiv.classList.remove("fade-out"); // Remove fade-out animation

    // Initialize FAQ toggle functionality after content is loaded
    if (page === "faq") {
      initializeFAQ();
    }
  }, 500);
}

// Function to initialize FAQ toggle functionality
function initializeFAQ() {
  let faqs = document.querySelectorAll(".faq-item");
  faqs.forEach((faq) => {
    faq.addEventListener("click", function () {
      this.classList.toggle("active");
      let content = this.querySelector(".faq-content");
      if (this.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = "0px";
      }
    });
  });
}