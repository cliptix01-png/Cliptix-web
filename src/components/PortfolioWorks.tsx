import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '../data/agencyData';
import { Project } from '../types';
import { ArrowUpRight, ExternalLink, Sparkles, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { soundFx } from '../utils/sound';

export const PortfolioWorks: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Spatial UI & AR Hardware', 'Acoustic & Brand Experience', 'FinTech Platform', 'AI Interface & Product'];

  const filteredProjects = selectedCategory === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="works" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#05060A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <div className="flex items-center space-x-2.5 mb-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#A018FF] to-[#20E6E6]" />
              <span className="text-xs font-semibold tracking-wider text-[#20E6E6] uppercase">
                Featured Case Studies
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7FA]">
              Selected Works
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedCategory(cat);
                }}
                className={`text-xs font-medium px-4 py-2 rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#A018FF] via-[#4A6CFF] to-[#20E6E6] text-white font-semibold shadow-md shadow-purple-950/40'
                    : 'bg-[#10131A] border border-[#1C2433] text-[#9AA5B1] hover:text-[#F5F7FA] hover:border-[#4A6CFF]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => {
                soundFx.playChime();
                setSelectedProject(project);
              }}
              className="group bg-[#10131A] border border-[#1C2433] hover:border-[#4A6CFF]/60 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(160,24,255,0.25)]"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#151B25]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10131A] via-transparent to-transparent opacity-80" />

                <div className="absolute top-4 left-4 bg-[#05060A]/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#1C2433] text-[11px] font-mono text-[#20E6E6]">
                  {project.category}
                </div>

                <div className="absolute top-4 right-4 bg-[#151B25]/90 p-2.5 rounded-full border border-[#1C2433] text-[#F5F7FA] group-hover:bg-gradient-to-r group-hover:from-[#A018FF] group-hover:to-[#20E6E6] transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-2xl text-[#F5F7FA] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#A018FF] group-hover:to-[#20E6E6] transition-all">
                    {project.title}
                  </h3>
                  <span className="text-xs text-[#9AA5B1] font-mono">{project.year}</span>
                </div>

                <p className="text-xs text-[#9AA5B1] line-clamp-2 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#1C2433] text-xs">
                  <span className="text-[#9AA5B1]">Client: <strong className="text-[#F5F7FA] font-semibold">{project.client}</strong></span>
                  <span className="text-[#20E6E6] font-mono bg-[#151B25] border border-[#1C2433] px-3 py-1 rounded-md">
                    {project.impact}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05060A]/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#10131A] border border-[#1C2433] rounded-3xl max-w-3xl w-full p-6 sm:p-8 my-8 relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-[#9AA5B1] hover:text-[#F5F7FA] bg-[#151B25] p-2 rounded-full cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-mono text-[#20E6E6] uppercase tracking-widest bg-[#151B25] border border-[#1C2433] px-3.5 py-1 rounded-full">
                  {selectedProject.category}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#F5F7FA] mt-3">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="rounded-2xl overflow-hidden mb-6 aspect-[16/9] bg-[#151B25]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-[#9AA5B1] text-sm leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#151B25] border border-[#1C2433] p-4 rounded-xl">
                  <span className="text-xs text-[#9AA5B1] uppercase tracking-wider block mb-1">Impact Result</span>
                  <span className="text-xl font-extrabold text-[#20E6E6] font-mono">{selectedProject.impact}</span>
                </div>
                <div className="bg-[#151B25] border border-[#1C2433] p-4 rounded-xl">
                  <span className="text-xs text-[#9AA5B1] uppercase tracking-wider block mb-1">Client Partner</span>
                  <span className="text-xl font-bold text-[#F5F7FA]">{selectedProject.client}</span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-semibold text-[#9AA5B1] uppercase tracking-wider mb-3">Key Deliverables:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.deliverables.map((del) => (
                    <span key={del} className="bg-[#151B25] border border-[#1C2433] text-[#F5F7FA] text-xs px-3 py-1.5 rounded-lg flex items-center space-x-1.5">
                      <Check className="w-3.5 h-3.5 text-[#20E6E6]" />
                      <span>{del}</span>
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="w-full bg-gradient-to-r from-[#A018FF] via-[#4A6CFF] to-[#20E6E6] text-white font-semibold py-3.5 rounded-xl transition-opacity hover:opacity-90 cursor-pointer shadow-lg shadow-purple-950/40"
              >
                Close Case Study
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

