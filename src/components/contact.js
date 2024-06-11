export function Contact() {
  return(
    <section id="contact">
      <div className="container">
        <h1 className="section-heading text-center">CONTACT US</h1>
        <div id="form-messages"></div>
        <form id="ajax-contact" method="post" className="wow fadeIn" role="form" data-toggle="validator">

          <div className="form-group has-feedback">
            <input type="text" className="form-control" id="name" name="name" placeholder="NAME*" data-error="Field can't be blank!" required />
            <div className="help-block with-errors"></div>
          </div>

          <div className="form-group has-feedback">
            <input type="email" className="form-control" id="email" name="email" placeholder="EMAIL*" data-error="Field can't be blank!" require />
            <div className="help-block with-errors"></div>
          </div>

          <div className="form-group has-feedback">
            <input type="tel" className="form-control" id="phone" name="phone" placeholder="PHONE NUMBER" data-error="Must be a phone number" pattern="[0-9\(\)-+ ]+" data-minlength="8" />
            <div className="help-block with-errors"></div>
          </div>

          <div className="form-group has-feedback">
            <textarea data-minlength="10" className="form-control" id="message" name="message" placeholder="MESSAGE*" data-error="Minimum of 10 characters" required></textarea>
            <div className="help-block with-errors"></div>
          </div>

          <div className="clearfix"></div>
          <div className="hidden">
            <input type="text" className="form-control" id="human" name="human" placeholder="" />
          </div>

          <div className="form-group text-center">
            <button type="submit" id="submit" name="submit" className="btn btn-default btn-lg">SEND MESSAGE</button>
          </div>

        </form>
      </div>
    </section>
  )
}