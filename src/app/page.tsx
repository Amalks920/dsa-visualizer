'use client'
import { JSX, useState } from "react";
import Sidebar from "./components/Sidebar/SideBar";
import DummyComponent from "./components/DummyComponent";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2 } from 'lucide-react';

interface ArrayElement {
  id: number;
  value: string;
  isNew: boolean;
}

export default function Home() {
 //return (<ArrayInsertionAnimation/>)

  const [array, setArray] = useState<ArrayElement[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [insertIndex, setInsertIndex] = useState<string>('');

  const addElement = (): void => {
    if (inputValue.trim() === '') return;
    
    const newElement: ArrayElement = {
      id: Date.now(),
      value: inputValue.trim(),
      isNew: true
    };
    
    const index: number = insertIndex === '' ? array.length : parseInt(insertIndex);
    const validIndex: number = Math.max(0, Math.min(index, array.length));
    
    const newArray: ArrayElement[] = [...array];
    newArray.splice(validIndex, 0, newElement);
    
    setArray(newArray);
    setInputValue('');
    setInsertIndex('');
    
    // Remove the "new" flag after animation
    setTimeout(() => {
      setArray(prev => prev.map(item => 
        item.id === newElement.id ? { ...item, isNew: false } : item
      ));
    }, 600);
  };

  const removeElement = (id: number): void => {
    setArray(prev => prev.filter(item => item.id !== id));
  };

  const clearArray = (): void => {
    setArray([]);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      addElement();
    }
  };

  return (
    <div className="flex h-[100vh] bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">

    <div className="w-[80vw] flex flex-col justify-center items-center  p-4 pb-0">
    <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Array Insertion Visualizer</h1>
          <p className="text-blue-200">Watch elements animate into the array!</p>
        </motion.div>
        <div className="h-fit w-4/5 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-white/20"
        >
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label className="block text-white text-sm font-medium mb-2">
                Element Value
              </label>
              <input
                type="text"
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter a value..."
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="block text-white text-sm font-medium mb-2">
                Insert at Index (optional)
              </label>
              <input
                type="number"
                value={insertIndex}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInsertIndex(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="End of array"
                min="0"
                max={array.length}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={addElement}
                disabled={!inputValue.trim()}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Plus size={20} />
                Add
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearArray}
                disabled={array.length === 0}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Trash2 size={20} />
                Clear
              </motion.button>
            </div>
          </div>
        </motion.div>
        </div>
        <div className="h-fit min-h-[500px]">
        <DummyComponent array={array} />
        </div>
    </div>
    <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="w-[20vw] bg-white/10 backdrop-blur-lg border-l border-white/20 p-6 overflow-y-auto"
     //className="w-[20vw]"
     >
      <Sidebar/>
    </motion.div>
  </div>
  );
}


interface ArrayElement {
  id: number;
  value: string;
  isNew: boolean;
}

 function ArrayInsertionAnimation(): JSX.Element {
  const [array, setArray] = useState<ArrayElement[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [insertIndex, setInsertIndex] = useState<string>('');

  const addElement = (): void => {
    if (inputValue.trim() === '') return;
    
    const newElement: ArrayElement = {
      id: Date.now(),
      value: inputValue.trim(),
      isNew: true
    };
    
    const index: number = insertIndex === '' ? array.length : parseInt(insertIndex);
    const validIndex: number = Math.max(0, Math.min(index, array.length));
    
    const newArray: ArrayElement[] = [...array];
    newArray.splice(validIndex, 0, newElement);
    
    setArray(newArray);
    setInputValue('');
    setInsertIndex('');
    
    // Remove the "new" flag after animation
    setTimeout(() => {
      setArray(prev => prev.map(item => 
        item.id === newElement.id ? { ...item, isNew: false } : item
      ));
    }, 600);
  };

  const removeElement = (id: number): void => {
    setArray(prev => prev.filter(item => item.id !== id));
  };

  const clearArray = (): void => {
    setArray([]);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      addElement();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Array Insertion Visualizer</h1>
          <p className="text-blue-200">Watch elements animate into the array!</p>
        </motion.div>

        {/* Input Controls */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-white/20"
        >
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label className="block text-white text-sm font-medium mb-2">
                Element Value
              </label>
              <input
                type="text"
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter a value..."
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="block text-white text-sm font-medium mb-2">
                Insert at Index (optional)
              </label>
              <input
                type="number"
                value={insertIndex}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInsertIndex(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="End of array"
                min="0"
                max={array.length}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={addElement}
                disabled={!inputValue.trim()}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Plus size={20} />
                Add
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearArray}
                disabled={array.length === 0}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Trash2 size={20} />
                Clear
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Array Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
        >
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Array [{array.length} elements]
          </h2>
          
          <div className="flex flex-wrap gap-3 justify-center min-h-[100px] items-center">
            <AnimatePresence mode="popLayout">
              {array.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-white/60 text-lg"
                >
                  Array is empty. Add some elements!
                </motion.div>
              ) : (
                array.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ 
                      opacity: 0, 
                      scale: 0.5, 
                      rotate: -180,
                      y: -50
                    }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      rotate: 0,
                      y: 0
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0.5, 
                      rotate: 180,
                      y: 50
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20,
                      layout: { duration: 0.3 }
                    }}
                    className="relative group"
                  >
                    <motion.div
                      className={`
                        relative px-6 py-4 rounded-xl font-mono text-lg font-semibold shadow-lg cursor-pointer
                        ${item.isNew 
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
                          : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        }
                        hover:shadow-xl transform transition-all duration-200
                      `}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => removeElement(item.id)}
                    >
                      {item.value}
                      <motion.div
                        className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 90 }}
                      >
                        ×
                      </motion.div>
                    </motion.div>
                    
                    {/* Index label */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm font-medium"
                    >
                      [{index}]
                    </motion.div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center text-white/70"
        >
          <p className="mb-2">💡 <strong>Tips:</strong></p>
          <p className="text-sm">
            • Leave index empty to add at the end • Click elements to remove them • Press Enter to add quickly
          </p>
        </motion.div>
      </div>
    </div>
  );
}