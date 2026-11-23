import { useState } from '@lynx-js/react';
import profile from './assets/profile.png';
const rows = ['USD', 'EUR', 'GBP', 'JPY', 'BDT', 'INR', 'AED', 'CAD'];

export function App() {
  const [name, setName] = useState('');
  const [outer, setOuter] = useState(0);
  const [inner, setInner] = useState(0);

  return (
    <view
      className="app-root col"
      style={{
        height: '100%',
        backgroundColor: '#ffffff',
      }}
    >
      <view className="col enter-in" style={{ padding: '56px 20px 12px' }}>
        <text className="w8" style={{ fontSize: '40px', color: '#E2136E' }}>
          Mohor
        </text>
        <text style={{ fontSize: '16px', color: '#4B5563' }}>
          One wallet, every currency
        </text>
      </view>
      <view style={{ flex: 1 }}>
        <scroll-view scroll-orientation="vertical" style={{ height: '100%' }}>
          <view
            className="col"
            style={{ padding: '8px 20px 40px', gap: '16px' }}
          >
            <view className="row" style={{ gap: '12px' }}>
              <image
                src={profile}
                style={{ width: '48px', height: '48px', borderRadius: '24px' }}
              />
              <view style={{ flex: 1 }}>
                <text className="w7" style={{ fontSize: '16px' }}>
                  {name ? `Hello, ${name}` : 'Hello, there'}
                </text>
              </view>
              <view
                className="spin"
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '10px',
                  border: '3px solid #FDE7F0',
                  borderTopColor: '#E2136E',
                }}
              />
            </view>
            <text style={{ fontSize: '18px' }}>
              Each weight is its own family: {''}
              <text className="w8">extra bold</text>, then regular again.
            </text>
            <input
              placeholder="Type your name"
              placeholder-color={0xff9ca3af}
              bindinput={(e) => setName(e.detail.value)}
              style={{
                height: '48px',
                padding: '0 14px',
                borderRadius: '12px',
                backgroundColor: '#F7F7F9',
                fontSize: '16px',
              }}
            />
            <view
              className="col"
              bindtap={() => setOuter((n) => n + 1)}
              style={{
                padding: '16px',
                gap: '12px',
                borderRadius: '16px',
                backgroundColor: '#FDE7F0',
              }}
            >
              <text className="w6">Outer box taps: {outer}</text>
              <view
                className="center"
                catchtap={() => setInner((n) => n + 1)}
                style={{
                  height: '56px',
                  borderRadius: '12px',
                  backgroundColor: '#E2136E',
                }}
              >
                <text className="w6" style={{ color: '#FFFFFF' }}>
                  Inner box taps: {inner}
                </text>
              </view>
            </view>
            {rows.map((r) => (
              <view
                key={r}
                className="row"
                style={{ height: '64px', borderBottom: '1px solid #ECECF0' }}
              >
                <text className="w5" style={{ fontSize: '16px' }}>
                  {r}
                </text>
              </view>
            ))}
          </view>
        </scroll-view>
      </view>
    </view>
  );
}
