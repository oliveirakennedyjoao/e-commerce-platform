import 'tailwindcss/tailwind.css';
import './global.css';
import './page.module.scss';
export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className="bg-gray-50">
      <span className="block">Ready to dive in?</span>
      <div className="bg-gray-50">
        <span className="block">Ready to dive in?</span>
      </div>
      <div className="bg-indigo-500 p-2 font-mono">Hello!</div>
    </div>
  );
}
