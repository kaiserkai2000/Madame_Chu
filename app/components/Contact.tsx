export default function Contact() {
  return (
    <section className="py-20 relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
          linear-gradient(to bottom, rgba(88, 28, 135, 0.85), rgba(0, 0, 0, 0.85)),
          url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/footer.jpg-H8A3pv9fNAfHzFwx2VknQ91QZZHntK.jpeg')
        `,
          backgroundRepeat: "repeat",
          backgroundSize: "500px",
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-200">CONTACT US</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="text-center md:text-left">
            <p className="mb-8 text-purple-100">
              331 New Bridge Road <br />
              #01-03 Dorsett <br />
              Opposite Dorsett Hotel <br />
              Singapore 088764
              <br />
              Phone:{" "}
              <a href="tel:+6582054725" className="text-purple-300 hover:text-purple-100 underline">
                +65 8205 4725
              </a>
              <br />
              Email:{" "}
              <a href="mailto:info@virtureventure.org" className="text-purple-300 hover:text-purple-100 underline">
                info@virtureventure.org
              </a>
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-200">OPENING HOURS</h3>
              <p className="text-purple-100">Monday - Sunday: 3:00 PM - 12:00 AM</p>
            </div>
          </div>
          <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8221123303924!2d103.83790607531947!3d1.2803983987074323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19415fde41bd%3A0x5eaa65af7f14f190!2sMadame%20Chu!5e0!3m2!1sen!2ssg!4v1736744100320!5m2!1sen!2ssg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Madame Chu Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
