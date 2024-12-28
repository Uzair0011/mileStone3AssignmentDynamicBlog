export default function Contact() {
  return (
    <div
      className="h-[750px] bg-slate-200 justify-items-center items-center text-center md:h-auto "
      id="Contact"
    >
      <div className="pt-10 w-[350px] h-[250px] md:flex justify-between md:w-[800px] md:h-[500px] items-center lg:w-[900px] ">
        <iframe
          className="w-[350px] h-[250px] md:w-[500px] md:h-[400px] lg:w-[800px]  "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.278633353217!2d67.00983400867011!3d24.854331445414985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e0f140f7ec7%3A0x9deea907ba213923!2sPakistan%20Chowk%2C%20Saddar%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1730883902400!5m2!1sen!2s"
          loading="lazy"
        ></iframe>
        <div className=" py-10 md:text-start md:pl-10">
          <h1 className="  font-bold text-3xl">Contact</h1>
          <form action="">
            <fieldset>
              <legend className="pt-8">Name</legend>
              <input
                className="xs:w-[300px] sm:w-[400px]  md:w-[300px] "
                type="text"
                placeholder=" type your name"
                required
              />
            </fieldset>

            {/* email */}
            <br />
            <fieldset>
              <legend>Email</legend>
              <input
                className="xs:w-[300px] sm:w-[400px] md:w-[300px]  "
                type="email"
                placeholder=" type your email"
                required
              />
            </fieldset>
            {/* message */}
            <br />
            <fieldset>
              <legend>Message</legend>
              <textarea
                className="xs:w-[300px] sm:w-[400px] md:w-[300px]  "
                name="message"
                id="message"
                placeholder="type your message"
                rows={4}
                required
              ></textarea>
            </fieldset>

            <button className="px-5 rounded bg-black text-white mt-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
