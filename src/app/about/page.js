export const metadata = {
    title: 'About !!!',
    description: 'This is about from metadata',
  }

export default () => {
    return (<div>
            About this website
            {["china","france"].map(e => <div id={e} className="uppercase text-2xl font-bold">{e}</div>)}
            </div>)
}