import { Link } from 'react-router-dom';
import CTASection from '../../components/CTASection';
import { useSEO } from '../../utils/seo';

export default function ShadeComparison() {
  useSEO({
    title: 'Solar vs. Blackout vs. Zebra Shades — Which Is Right? | NA Blinds',
    description: 'A side-by-side comparison of the three most popular shade types for South Florida homes. Learn which works best for each room and what to expect on cost.',
    canonicalUrl: 'https://www.nablinds.co/guides/solar-vs-blackout-vs-zebra'
  });

  return (
    <>
      <section className="relative py-20 md:py-28 bg-soft-sand">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Link to="/guides" className="inline-block text-sm text-taupe hover:text-warm-dark transition-colors mb-6">&larr; All Guides</Link>
          <h1 className="text-warm-dark mb-6">
            Solar vs. Blackout vs. Zebra Shades
          </h1>
          <p className="text-lg text-warm-gray leading-relaxed">
            The three most popular shade types for South Florida homes, compared side by side.
          </p>
        </div>
      </section>

      <article className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose-warm">

          <h2>The Quick Comparison</h2>
          <p>If you're short on time, here's the essential breakdown:</p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-taupe/20">
                  <th className="text-left py-3 pr-4 font-semibold text-warm-dark">Feature</th>
                  <th className="text-left py-3 pr-4 font-semibold text-warm-dark">Solar</th>
                  <th className="text-left py-3 pr-4 font-semibold text-warm-dark">Blackout</th>
                  <th className="text-left py-3 font-semibold text-warm-dark">Zebra</th>
                </tr>
              </thead>
              <tbody className="text-warm-gray">
                <tr className="border-b border-taupe/10">
                  <td className="py-3 pr-4 font-medium text-warm-dark">Blocks Heat</td>
                  <td className="py-3 pr-4">★★★</td>
                  <td className="py-3 pr-4">★★</td>
                  <td className="py-3">★★</td>
                </tr>
                <tr className="border-b border-taupe/10">
                  <td className="py-3 pr-4 font-medium text-warm-dark">Blocks Light</td>
                  <td className="py-3 pr-4">★</td>
                  <td className="py-3 pr-4">★★★</td>
                  <td className="py-3">★★</td>
                </tr>
                <tr className="border-b border-taupe/10">
                  <td className="py-3 pr-4 font-medium text-warm-dark">Keeps View</td>
                  <td className="py-3 pr-4">★★★</td>
                  <td className="py-3 pr-4">—</td>
                  <td className="py-3">★★</td>
                </tr>
                <tr className="border-b border-taupe/10">
                  <td className="py-3 pr-4 font-medium text-warm-dark">Privacy</td>
                  <td className="py-3 pr-4">★★</td>
                  <td className="py-3 pr-4">★★★</td>
                  <td className="py-3">★★★</td>
                </tr>
                <tr className="border-b border-taupe/10">
                  <td className="py-3 pr-4 font-medium text-warm-dark">Energy Savings</td>
                  <td className="py-3 pr-4">★★★</td>
                  <td className="py-3 pr-4">★★</td>
                  <td className="py-3">★★</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-warm-dark">Best For</td>
                  <td className="py-3 pr-4">Living rooms, offices</td>
                  <td className="py-3 pr-4">Bedrooms, media rooms</td>
                  <td className="py-3">Any room, modern look</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Solar Shades: The South Florida Essential</h2>
          <p>
            If you could only install one type of shade in a South Florida home, solar shades would be the recommendation 90% of the time. They're purpose-built for exactly what our climate throws at you: intense sun, punishing heat, and UV that fades everything it touches.
          </p>
          <p>
            Solar shades use a mesh-like fabric that filters sunlight rather than blocking it entirely. You can still see through them — your ocean view, your garden, your pool — but the glare, heat, and UV are dramatically reduced. The best solar fabrics block up to 95% of UV rays while keeping rooms naturally lit and comfortable.
          </p>
          <h3>Where they shine</h3>
          <ul>
            <li>West- and south-facing windows that get pounded by afternoon sun</li>
            <li>Living rooms and great rooms where you want light and views</li>
            <li>Home offices where screen glare is a problem</li>
            <li>Kitchens and dining areas with nice outdoor views</li>
          </ul>
          <h3>The tradeoff</h3>
          <p>
            Solar shades don't provide complete privacy or full darkness. During the day, you can see out but people can't easily see in. At night with lights on, that reverses — people outside can see in. For bedrooms or rooms where you need total privacy, pair solar shades with drapes or consider blackout or zebra shades instead.
          </p>
          <h3>Typical cost</h3>
          <p>$300–$800 per window (manual) or $500–$1,200 per window (motorized), depending on size and fabric quality.</p>

          <h2>Blackout Shades: Total Light Control</h2>
          <p>
            Blackout shades do exactly what the name suggests — they block 100% of light. They use opaque, multi-layered fabrics and (in premium versions) sealed side channels that eliminate light gaps around the edges.
          </p>
          <p>
            Beyond darkness, blackout shades also provide excellent thermal insulation. By preventing solar heat from entering through windows, they can noticeably reduce cooling costs in rooms that get direct afternoon sun. Many South Florida homeowners see their biggest energy savings from blackout shades on west-facing bedroom windows.
          </p>
          <h3>Where they shine</h3>
          <ul>
            <li>Master bedrooms and guest rooms (especially for light sleepers)</li>
            <li>Nurseries and children's rooms (nap time is sacred)</li>
            <li>Media rooms and home theaters</li>
            <li>Any room where you want the option of total darkness</li>
          </ul>
          <h3>The tradeoff</h3>
          <p>
            When blackout shades are down, you lose your view entirely. The room goes dark. Some people find fully darkened rooms feel cave-like during the day. That's why many homeowners pair blackout shades with solar shades or sheers — blackout for sleeping, solar for daytime comfort.
          </p>
          <h3>Typical cost</h3>
          <p>$350–$900 per window (manual) or $550–$1,400 per window (motorized).</p>

          <h2>Zebra Shades: The Modern Hybrid</h2>
          <p>
            Zebra shades (also called dual-layer or transitional shades) are the newest of the three and have become extremely popular in contemporary South Florida homes. They use alternating bands of sheer and opaque fabric on a single roller. By adjusting the alignment of the bands, you seamlessly shift between an open, light-filtering state and a closed, privacy state.
          </p>
          <p>
            Think of them as the best of both worlds — the view-through quality of solar shades and the privacy of blackout shades, adjustable with a simple pull or (if motorized) a tap on your phone.
          </p>
          <h3>Where they shine</h3>
          <ul>
            <li>Bedrooms where you want flexibility (light during the day, privacy at night)</li>
            <li>Living rooms and dining areas in modern or contemporary homes</li>
            <li>Condos where clean, minimal aesthetics matter</li>
            <li>Any room where you want a sleek, architectural look</li>
          </ul>
          <h3>The tradeoff</h3>
          <p>
            Zebra shades in the "closed" position provide strong privacy but don't achieve 100% blackout like dedicated blackout shades. Some light still filters through the fabric. They're also slightly more complex mechanically — more moving parts than a simple roller shade — though modern versions are quite reliable.
          </p>
          <h3>Typical cost</h3>
          <p>$400–$1,000 per window (manual) or $600–$1,500 per window (motorized).</p>

          <h2>So Which Should You Choose?</h2>
          <p>For most South Florida homes, the answer is a combination:</p>
          <ul>
            <li><strong>Living areas, offices, kitchens:</strong> Solar shades (heat control + views)</li>
            <li><strong>Bedrooms:</strong> Blackout shades (sleep quality) or Zebra shades (flexibility)</li>
            <li><strong>Contemporary condos:</strong> Zebra shades throughout for a unified, modern look</li>
            <li><strong>Rooms with spectacular views:</strong> Solar shades — don't block what you're paying for</li>
          </ul>
          <p>
            The best approach is a room-by-room plan. A professional consultation will assess each window's orientation, the room's function, and your personal preferences to recommend the right mix.
          </p>

          <div className="mt-12 p-8 bg-soft-sand rounded-lg text-center">
            <h3 className="text-warm-dark mb-3">Not Sure Which Is Right for You?</h3>
            <p className="text-warm-gray mb-6 max-w-lg mx-auto">
              We bring fabric samples to your home so you can see and feel the difference in your own light. No obligation.
            </p>
            <Link
              to="/consultation"
              className="inline-block bg-warm-dark !text-white px-8 py-3 rounded font-medium hover:bg-charcoal transition-colors no-underline hover:!text-white"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
