import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/profile.jpg' alt='niranjana' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi, I'm Niranjana, a Computer Science student passionate about building meaningful technology.

I enjoy solving problems through code, exploring mathematics and astronomy, and transforming ideas into creative, user-focused solutions.

Whether I'm developing projects, organizing events, or learning something new, I'm always driven by curiosity and the desire to create with purpose.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
