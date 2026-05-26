import React, { useState } from 'react';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  const categories = {
   "مساحة (Surveying)": [
      { img: "/surveying.jpeg", title: "Surveying 1" },
      { img: "/surveying2.jpeg", title: "Surveying 2" },
      { img: "/QGIS.jpeg", title: "QGIS Mapping" },
      { img: "/argis.jpeg", title: "ArcGIS" } 
    ],
    "هندسة (Site Engineering)": [
      { img: "/eng.jpg", title: "Site Engineering" }
    ],
    "أمن سيبراني (Cyber Security)": [
      { img: "/cyper.jpeg", title: "Cyber Security" },
      { img: "/osint.jpeg", title: "OSINT" },
      { img: "/hacking.jpeg", title: "Ethical Hacking" },
      { img: "/hakar.jpeg", title: "Cyber Security" },
       { img: "/edrak.jpeg", title: "Cyber Security" }
    ],
    "شبكات (Networking)": [
      { img: "/netwark.jpeg", title: "Networking" },
      { img: "/netwark2.jpeg", title: "Advanced Networking" }
    ]
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#fff', padding: '40px', fontFamily: 'Segoe UI, sans-serif' }}>
      <style>{`
        .header { display: flex; align-items: center; justify-content: center; gap: 25px; margin-bottom: 60px; padding: 30px; background: #1e293b; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); }
        .avatar { width: 120px; height: 120px; border-radius: 50%; border: 4px solid #38bdf8; object-fit: cover; }
        .section-title { color: #38bdf8; margin: 50px 0 25px 0; font-size: 1.8rem; border-bottom: 2px solid #38bdf8; display: inline-block; }
        .gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 25px; }
        .cert-card { background: #1e293b; padding: 12px; border-radius: 12px; cursor: pointer; transition: 0.3s; border: 1px solid #334155; }
        .cert-card:hover { transform: translateY(-8px); border-color: #38bdf8; box-shadow: 0 10px 20px rgba(56, 189, 248, 0.2); }
        .cert-img { width: 100%; height: 220px; object-fit: contain; border-radius: 8px; }
        .overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 20px; }
      `}</style>

      <div className="header">
        <img src="/my-photo.jpg" alt="Kareem Ahmed" className="avatar" />
        <div>
          <h1 style={{ margin: 0, fontSize: '2.5rem' }}>Kareem Ahmed Mahmoud</h1>
          <p style={{ margin: '5px 0 0 0', color: '#94a3b8', fontSize: '1.2rem' }}>Cyber Security & Site Engineering Specialist</p>
        </div>
      </div>

      {Object.keys(categories).map((cat) => (
        <div key={cat}>
          <h2 className="section-title">{cat}</h2>
          <div className="gallery">
            {categories[cat].map((item, i) => (
              <div key={i} className="cert-card" onClick={() => setSelectedImg(item.img)}>
                <img src={item.img} alt={item.title} className="cert-img" />
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedImg && (
        <div className="overlay" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '12px' }} alt="Certificate Full View" />
        </div>
      )}
      {/* جزء التذييل النهائي */}
      <footer style={{ marginTop: '80px', padding: '40px', borderTop: '1px solid #334155', textAlign: 'center', color: '#94a3b8' }}>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
          هذا الموقع يعرض الشهادات الاحترافية التي حصل عليها المهندس/ <strong>كريم أحمد محمود</strong>. 
          جميع الشهادات صادرة من جهات تعليمية مرموقة ومعتمدة، تشمل: 
          <strong> معهد تكنولوجيا المعلومات (ITI)</strong>، 
          <strong> منصة معارف (Mind Luster)</strong>، 
          ومؤسسة الملكة رانيا للتعليم والتنمية بالشراكة مع <strong>معهد ماساتشوستس للتكنولوجيا (MIT)</strong>.
          <br /><br />
          <span style={{ color: '#38bdf8' }}>
             ملاحظة: جميع الشهادات الموضحة تحتوي على رمز استجابة سريع  
            يمكن التحقق من صحتها ومصداقيتها مباشرة من خلال المنصات التعليمية التابعة لها.
          </span>
        </p>
      </footer>
    </div>
  );
}

export default App;