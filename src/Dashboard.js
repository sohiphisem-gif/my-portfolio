import React from 'react';

const certificates = [
  "CIPER.jpeg", "QGIS.jpeg", "argis.jpeg", "cyper.jpeg", 
  "eng.jpg", "netwark.jpeg", "netwark2.jpeg", "osint.jpeg"
];

function Dashboard() {
  return (
    <div style={{ padding: '40px', backgroundColor: '#0f172a', minHeight: '100vh', color: '#fff' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px', gap: '20px' }}>
        <img src="/my-photo.jpg" alt="Profile" style={{ width: '80px', height: '80px', borderRadius: '50%', border: '2px solid #38bdf8' }} />
        <h1>Eng. Kareem Ahmed Mahmoud</h1>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
        {certificates.map((imgName, index) => (
          <div key={index} style={{ border: '1px solid #38bdf8', borderRadius: '15px', padding: '15px', backgroundColor: '#1e293b' }}>
            <img 
              src={`/${imgName}`} 
              alt="Certificate" 
              style={{ 
                width: '100%', 
                height: '400px', // زودنا الارتفاع هنا
                objectFit: 'contain', // بدل 'cover' عشان الصورة تظهر كاملة من غير ما تتقص
                borderRadius: '10px',
                backgroundColor: '#fff' // خلفية بيضاء للصورة عشان تظهر بشكل أنظف
              }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;