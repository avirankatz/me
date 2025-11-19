import { useRef, useMemo, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useLanguage } from '../context/LanguageContext';
import { Filter, ArrowUpDown, RotateCcw, CheckCircle2 } from 'lucide-react';

const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `Item-${Math.random().toString(36).substring(7).toUpperCase()}`,
    status: ['Active', 'Pending', 'Archived'][Math.floor(Math.random() * 3)],
    value: (Math.random() * 1000).toFixed(2),
    category: ['A', 'B', 'C'][Math.floor(Math.random() * 3)],
    lastUpdated: new Date().toISOString().split('T')[0]
  }));
};

export const PerformanceDemo = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const [filter, setFilter] = useState('');
  
  // Generate 10,000 items
  const allItems = useMemo(() => generateStars(10000), []);
  
  const items = useMemo(() => {
    if (!filter) return allItems;
    return allItems.filter(item => item.status.toLowerCase().includes(filter.toLowerCase()));
  }, [allItems, filter]);

  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 40,
    overscan: 5,
  });

  return (
    <section className="py-20 px-4 bg-gray-50 proof">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 proof-intro">
          <h2 className="text-4xl md:text-6xl mb-4 font-black text-center title-gradient">
            {t.proof.title} <span className="text-neo-primary">{t.proof.subtitle}</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12 proof-cards">
            <div className="bg-white p-8 border-2 border-black shadow-neo-sm proof-card">
              <h3 className="text-2xl font-bold mb-2">{t.proof.sections.myWork.title}</h3>
              <p className="text-gray-600 mb-4">{t.proof.sections.myWork.desc}</p>
              <p className="font-mono text-sm bg-gray-100 p-2 border border-gray-200">
                {t.proof.sections.myWork.clients}
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-black shadow-neo-sm proof-card">
              <h3 className="text-2xl font-bold mb-2">{t.proof.sections.sofi.title}</h3>
              <p className="text-gray-600 mb-4">{t.proof.sections.sofi.desc}</p>
              <p className="font-mono text-sm bg-gray-100 p-2 border border-gray-200">
                {t.proof.sections.sofi.clients}
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-black shadow-neo proof-demo">
              {/* Demo Header */}
              <div className="p-4 border-b-2 border-black bg-gray-50 flex justify-between items-center demo-header">
                <div>
                  <h3 className="font-bold">{t.proof.demo.title}</h3>
                  <p className="text-xs text-gray-500 font-mono">{t.proof.demo.caption}</p>
                </div>
                <div className="flex gap-2 demo-controls">
                  <button 
                    onClick={() => setFilter(filter ? '' : 'active')}
                    className={`chip ${filter ? 'bg-neo-primary text-white' : ''}`}
                  >
                    <Filter size={14} /> {t.proof.demo.controls.filter}
                  </button>
                  <button className="chip">
                    <ArrowUpDown size={14} /> {t.proof.demo.controls.sort}
                  </button>
                  <button 
                    onClick={() => setFilter('')}
                    className="chip"
                  >
                    <RotateCcw size={14} /> {t.proof.demo.controls.reset}
                  </button>
                </div>
              </div>

              {/* Virtualized List */}
              <div className="h-[400px] flex flex-col data-table" dir="ltr">
                <div className="grid grid-cols-5 font-bold border-b border-gray-200 py-2 px-4 bg-white text-xs text-gray-500 data-header">
                  <div>ID</div>
                  <div>NAME</div>
                  <div>STATUS</div>
                  <div>VALUE</div>
                  <div>UPDATED</div>
                </div>
                
                <div 
                  ref={parentRef} 
                  className="flex-1 overflow-auto bg-white"
                  style={{ contain: 'strict' }}
                >
                  <div
                    style={{
                      height: `${rowVirtualizer.getTotalSize()}px`,
                      width: '100%',
                      position: 'relative',
                    }}
                  >
                    {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                      const item = items[virtualRow.index];
                      return (
                        <div
                          key={virtualRow.key}
                          className="absolute top-0 left-0 w-full"
                          style={{
                            height: `${virtualRow.size}px`,
                            transform: `translateY(${virtualRow.start}px)`,
                          }}
                        >
                          <div className="grid grid-cols-5 py-2 px-4 border-b border-gray-100 hover:bg-blue-50 transition-colors text-sm font-mono items-center data-row">
                            <div className="truncate text-gray-400">#{item.id}</div>
                            <div className="truncate font-bold">{item.name}</div>
                            <div>
                              <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                item.status === 'Active' ? 'bg-green-100 text-green-800' :
                                item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {item.status.toUpperCase()}
                              </span>
                            </div>
                            <div className="truncate">${item.value}</div>
                            <div className="truncate text-gray-500">{item.lastUpdated}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="p-2 border-t border-gray-200 bg-gray-50 text-xs font-mono flex justify-between demo-footer">
                  <span>{items.length.toLocaleString()} items</span>
                  <span className="text-green-600 font-bold">60 FPS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Proof Points */}
          <div className="flex flex-col justify-center proof-points">
            <h4 className="font-bold mb-4 text-lg">WHAT THIS PROVES:</h4>
            <ul className="space-y-4">
              {t.proof.demo.proves.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-neo-primary shrink-0 mt-0.5" size={20} />
                  <span className="text-sm font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
