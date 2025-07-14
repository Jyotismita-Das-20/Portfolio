const Section = ({icon, children, sectionTitle}) => {
  return <div className='my-8 mx-5'>
    <div className='flex my-3 items-center'>
      {icon}
      <h1 className='font-bold text-2xl mx-2'>{sectionTitle}</h1>
    </div>
    {children}
  </div>;
}

export default Section;