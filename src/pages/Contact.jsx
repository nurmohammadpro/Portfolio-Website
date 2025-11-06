import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, X } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'nur_mohammad1@outlook.com',
      link: 'mailto:nur_mohammad1@outlook.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+880 1841 737686',
      link: 'tel:+8801841737686'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Feni, Bangladesh',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: 'GitHub',
      url: 'https://github.com/nurmohammadpro'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nur-mohammad-149515b4/'
    },
    {
      icon: <X className="w-5 h-5" />,
      name: 'Twitter',
      url: 'https://x.com/nurmohammad_pro'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-subtle rounded-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-primary-color text-xl font-semibold mb-2">
            Get In Touch
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Let's Work Together
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Let's start a conversation
                </h2>
                <p className="text-lg text-secondary mb-8">
                  I'm always interested in new opportunities, whether it's a freelance project, 
                  full-time position, or just a friendly chat about technology and design.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center gap-4 p-4 rounded-lg border border-default hover:border-primary-color hover:bg-subtle transition-all duration-300 group"
                  >
                    <div className="text-primary-color group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{item.title}</h3>
                      <p className="text-secondary">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Follow me on</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-default rounded-sm hover:shadow-sm text-primary hover:border-primary-color hover:bg-subtle transition-all ease-in duration-300 group"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-default rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-default rounded-lg bg-input focus:border-primary-color focus:ring-2 focus:ring-primary-color/20 transition-all duration-300 outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-default rounded-lg bg-input focus:border-primary-color focus:ring-2 focus:ring-primary-color/20 transition-all duration-300 outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-default rounded-lg bg-input focus:border-primary-color focus:ring-2 focus:ring-primary-color/20 transition-all duration-300 outline-none"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-default rounded-lg bg-input focus:border-primary-color focus:ring-2 focus:ring-primary-color/20 transition-all duration-300 outline-none resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-color text-primary py-4 hover:shadow-sm px-6 rounded-sm border-secondary-color cursor-pointer font-semibold hover:bg-primary-color/90 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform ease-in duration-300" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-subtle rounded-sm">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-secondary">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What's your typical response time?",
                answer: "I usually respond within 24 hours. For urgent matters, please mention 'URGENT' in your subject line."
              },
              {
                question: "Do you work remotely?",
                answer: "Yes, I'm comfortable working remotely and have experience collaborating with distributed teams."
              },
              {
                question: "What types of projects do you take on?",
                answer: "I work on web applications, mobile apps, e-commerce platforms, and custom software solutions."
              },
              {
                question: "What's your development process?",
                answer: "I follow an agile methodology with regular communication, milestones, and feedback sessions."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card border border-default rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">{faq.question}</h3>
                <p className="text-secondary leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;