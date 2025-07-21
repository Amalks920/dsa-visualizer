import { motion } from "framer-motion";
import { Plus, Trash2 } from 'lucide-react';

interface ArrayControlsProps {
  inputValue: string;
  setInputValue: (v: string) => void;
  insertIndex: string;
  setInsertIndex: (v: string) => void;
  addElement: () => void;
  clearArray: () => void;
  arrayLength: number;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const ArrayControls = ({
  inputValue,
  setInputValue,
  insertIndex,
  setInsertIndex,
  addElement,
  clearArray,
  arrayLength,
  handleKeyPress
}: ArrayControlsProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.2 }}
    className="bg-[#1a003c] rounded-2xl p-6 mb-8 border-2 border-pink-500 shadow-[0_0_24px_2px_rgba(255,0,255,0.2)]"
  >
    <div className="flex flex-col md:flex-row gap-4 items-end">
      <div className="flex-1">
        <label className="block text-white text-sm font-medium mb-2">
          Element Value
        </label>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a value..."
          className="w-full px-4 py-3 bg-[#1a003c] border-2 border-pink-500 rounded-xl text-lime-300 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
        />
      </div>
      <div className="flex-1">
        <label className="block text-white text-sm font-medium mb-2">
          Insert at Index (optional)
        </label>
        <input
          type="number"
          value={insertIndex}
          onChange={e => setInsertIndex(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="End of array"
          min="0"
          max={arrayLength}
          className="w-full px-4 py-3 bg-[#1a003c] border-2 border-pink-500 rounded-xl text-lime-300 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
        />
      </div>
      <div className="flex gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={addElement}
          disabled={!inputValue.trim()}
          className="px-6 py-3 bg-gradient-to-r from-lime-400 to-green-500 text-black font-extrabold rounded-xl shadow-[0_0_8px_2px_rgba(163,255,0,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 hover:shadow-[0_0_24px_4px_rgba(163,255,0,0.7)] transition-shadow"
        >
          <Plus size={20} />
          Add
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={clearArray}
          disabled={arrayLength === 0}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white font-extrabold rounded-xl shadow-[0_0_8px_2px_rgba(255,0,128,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 hover:shadow-[0_0_24px_4px_rgba(255,0,128,0.7)] transition-shadow"
        >
          <Trash2 size={20} />
          Clear
        </motion.button>
      </div>
    </div>
  </motion.div>
);

export default ArrayControls; 