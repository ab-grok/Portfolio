export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  tags: string[];
  technologies: string[];
  features: string[];
  challenges: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Neural Network Dashboard',
    description: 'Advanced analytics platform for visualizing complex neural network architectures and training metrics in real-time.',
    fullDescription: 'A comprehensive dashboard application designed to provide deep insights into neural network training processes. This platform enables data scientists and ML engineers to monitor model performance, visualize layer activations, and optimize hyperparameters through an intuitive interface. Built with performance in mind, it handles large-scale data visualization without compromising responsiveness.',
    image: 'https://c.animaapp.com/mj2xtqbgWtXM5V/img/ai_3.png',
    imageAlt: 'project interface grid',
    tags: ['React', 'TypeScript', 'D3.js'],
    technologies: ['React', 'TypeScript', 'D3.js', 'WebGL', 'Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
    features: [
      'Real-time visualization of training metrics and loss curves',
      'Interactive layer-by-layer network architecture explorer',
      'Automated hyperparameter tuning suggestions',
      'Export capabilities for reports and presentations',
      'Multi-model comparison dashboard',
    ],
    challenges: 'The primary challenge was handling real-time data streams from multiple training processes while maintaining smooth 60fps visualizations. We implemented a custom WebGL rendering pipeline with efficient data buffering and implemented web workers for heavy computational tasks to keep the UI thread responsive.',
  },
  {
    id: 'project-2',
    title: 'Distributed Code Analyzer',
    description: 'Scalable microservices architecture for analyzing code quality, security vulnerabilities, and performance bottlenecks across large codebases.',
    fullDescription: 'An enterprise-grade code analysis platform that leverages distributed computing to scan millions of lines of code efficiently. The system provides actionable insights on code quality, identifies security vulnerabilities, and suggests performance optimizations. It integrates seamlessly with CI/CD pipelines and supports multiple programming languages.',
    image: 'https://c.animaapp.com/mj2xtqbgWtXM5V/img/ai_4.png',
    imageAlt: 'code network visualization',
    tags: ['Node.js', 'Microservices', 'AWS'],
    technologies: ['Node.js', 'TypeScript', 'Docker', 'Kubernetes', 'AWS Lambda', 'Redis', 'MongoDB', 'GraphQL'],
    features: [
      'Multi-language support including JavaScript, Python, Java, and Go',
      'Automated security vulnerability detection with CVE database integration',
      'Performance profiling and optimization recommendations',
      'Custom rule engine for organization-specific coding standards',
      'Real-time collaboration features for code review teams',
    ],
    challenges: 'Scaling the analysis engine to handle enterprise-level codebases required implementing a sophisticated job queue system with priority scheduling. We used Kubernetes for orchestration and AWS Lambda for burst capacity, achieving 10x performance improvement while reducing infrastructure costs by 40%.',
  },
  {
    id: 'project-3',
    title: 'AI-Powered Workspace',
    description: 'Intelligent collaboration platform that uses machine learning to optimize team workflows and automate repetitive tasks.',
    fullDescription: 'A next-generation workspace application that combines project management, communication, and automation in one unified platform. Using advanced AI algorithms, it learns from team patterns to suggest optimal task assignments, predict project timelines, and automate routine workflows. The platform adapts to each team\'s unique working style.',
    image: 'https://c.animaapp.com/mj2xtqbgWtXM5V/img/ai_5.png',
    imageAlt: 'futuristic workspace',
    tags: ['Next.js', 'AI/ML', 'Real-time'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Python', 'TensorFlow', 'WebSocket', 'PostgreSQL', 'Redis'],
    features: [
      'AI-driven task prioritization and assignment recommendations',
      'Natural language processing for automated meeting summaries',
      'Predictive analytics for project timeline estimation',
      'Integrated video conferencing with real-time transcription',
      'Smart notification system that learns user preferences',
    ],
    challenges: 'Building a real-time collaborative environment that scales to thousands of concurrent users while maintaining sub-100ms latency was complex. We implemented a custom WebSocket infrastructure with Redis pub/sub for message distribution and optimized database queries with strategic caching layers.',
  },
];
