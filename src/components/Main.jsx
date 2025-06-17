export const Main = ({ pages, refs, views }) => {
  return (
    <main className='flex-grow'>
      {pages.map(({ href, component }, index) => (
        <section
          id={href}
          ref={refs[href]}
          className={`${
            index === 0 ? 'section-first' : 'section-common'
          } transition-opacity ease-in duration-700 ${
            views[href] ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {component}
        </section>
      ))}
    </main>
  );
};
