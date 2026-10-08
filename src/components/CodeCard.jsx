/**
 * Decorative "code" card for the hero. Static on purpose (no typing animation) so the first
 * screen stays calm. Every line is a true statement about Nidhi; edit freely, keep it truthful.
 */
export default function CodeCard() {
  return (
    <div className="codecard" aria-hidden="true">
      <div className="codecard__bar">
        <span className="codecard__dot" />
        <span className="codecard__dot" />
        <span className="codecard__dot" />
        <span className="codecard__file">nidhi.js</span>
      </div>
      <pre className="codecard__code">
        <code>
          <span className="tk-k">const</span> nidhi <span className="tk-p">=</span> <span className="tk-p">{'{'}</span>
          {'\n  '}studying<span className="tk-p">:</span> <span className="tk-s">"B.Tech CSE"</span>
          <span className="tk-p">,</span>
          {'\n  '}building<span className="tk-p">:</span> <span className="tk-p">[</span>
          <span className="tk-s">"React"</span>
          <span className="tk-p">,</span> <span className="tk-s">"MERN"</span>
          <span className="tk-p">],</span>
          {'\n  '}practising<span className="tk-p">:</span> <span className="tk-s">"DSA"</span>
          <span className="tk-p">,</span>
          {'\n  '}learning<span className="tk-p">:</span> <span className="tk-s">"Backend, Cloud"</span>
          <span className="tk-p">,</span>
          {'\n'}
          <span className="tk-p">{'}'}</span>
          <span className="tk-p">;</span>
        </code>
      </pre>
    </div>
  );
}
