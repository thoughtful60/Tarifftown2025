
import { useState } from "react";

export default function TariffMeter() {
  const [step, setStep] = useState(1);
  const [relationship, setRelationship] = useState("");
  const [emotion, setEmotion] = useState("");
  const [result, setResult] = useState(null);

  const handleGenerate = () => {
    const baseFee = 100;
    const tariffs = {
      "Lover (Ex)": 320,
      "Family": 80,
      "Friend": 50,
      "Coworker": 0,
      "Stranger": 60,
      "Pet": -100,
      "Politician": 250,
      "AI Assistant": 75,
      "Inner Child": 0
    };
    const emotionCharges = {
      "Happy": 0,
      "Anxious": 50,
      "Lonely": 100,
      "Guilt-Ridden": 150,
      "Clingy": 180,
      "Indifferent": 20,
      "Spiritually Drained": 120,
      "Just Texted My Ex": 250,
      "Emotionally Unavailable": 200,
      "Pet-Deprived": 80
    };
    const tariffPercentage = (tariffs[relationship] || 0) + (emotionCharges[emotion] || 0);
    const emotionalFee = (baseFee * tariffPercentage) / 100;
    const total = baseFee + emotionalFee;
    setResult({ relationship, emotion, baseFee, tariffPercentage, emotionalFee, total });
    setStep(4);
  };

  const handleLeaveTown = () => {
    setStep(5);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: 'auto', fontFamily: 'monospace' }}>
      {step === 1 && (
        <div>
          <h2>Who are you dealing with today?</h2>
          <select onChange={(e) => setRelationship(e.target.value)} style={{ width: '100%', padding: '0.5rem' }}>
            <option value="">Select One</option>
            <option>Lover (Ex)</option>
            <option>Family</option>
            <option>Friend</option>
            <option>Coworker</option>
            <option>Stranger</option>
            <option>Pet</option>
            <option>Politician</option>
            <option>AI Assistant</option>
            <option>Inner Child</option>
          </select>
          <button onClick={() => setStep(2)} style={{ marginTop: '1rem' }}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>How are you feeling?</h2>
          <select onChange={(e) => setEmotion(e.target.value)} style={{ width: '100%', padding: '0.5rem' }}>
            <option value="">Select One</option>
            <option>Happy</option>
            <option>Anxious</option>
            <option>Lonely</option>
            <option>Guilt-Ridden</option>
            <option>Clingy</option>
            <option>Indifferent</option>
            <option>Spiritually Drained</option>
            <option>Just Texted My Ex</option>
            <option>Emotionally Unavailable</option>
            <option>Pet-Deprived</option>
          </select>
          <button onClick={handleGenerate} style={{ marginTop: '1rem' }}>Calculate Tariff</button>
        </div>
      )}

      {step === 4 && result && (
        <div style={{ whiteSpace: 'pre-wrap', border: '1px dashed #aaa', padding: '1.5rem', marginTop: '2rem' }}>
          <h2>🧾 Tariff Town Receipt</h2>
          {`
—————————— TARIFF TOWN ——————————
INTERACTION:    ${result.relationship}
MOOD:           ${result.emotion}

BASE FEE:       $${result.baseFee.toFixed(2)}
EMOTIONAL TARIFF: +${result.tariffPercentage}%
TARIFF FEE:     $${result.emotionalFee.toFixed(2)}

———————————— TOTAL DUE ———————————
                $${result.total.toFixed(2)}

Note: Payment accepted in sleepless nights or long sighs.
          `}
          <div style={{ marginTop: '1rem' }}>
            <button onClick={() => setStep(1)} style={{ marginRight: '1rem' }}>🔁 Redo</button>
            <button onClick={() => window.open("https://olgaforeign.com/pages/olga-foreigns-designs", "_blank")} style={{ marginRight: '1rem' }}>💰 Pay Bill</button>
            <button onClick={handleLeaveTown}>🚪 Leave Town</button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <h2>🚷 Leaving Tariff Town...</h2>
          <p>You pass a long line of people at the toll booth, each wearing signs:</p>
          <ul style={{ textAlign: 'left', display: 'inline-block' }}>
            <li>Family — 80%</li>
            <li>Friend — 50%</li>
            <li>Stranger — 60%</li>
            <li>Politician — 250%</li>
            <li>Pet — -100% (They're exempt!)</li>
          </ul>
          <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>"Come back when you're ready to pay with your feelings..."</p>
          <button onClick={() => setStep(1)} style={{ marginTop: '1rem' }}>🏠 Return to Town</button>
        </div>
      )}
    </div>
  );
}
