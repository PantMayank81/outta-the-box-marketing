const { spawn } = require('child_process');
const path = require('path');

console.log('Starting Next.js development server...');

const server = spawn('npx', ['next', 'dev'], {
  cwd: __dirname,
  stdio: 'inherit',
  shell: true
});

server.on('error', (err) => {
  console.error('Failed to start server:', err);
});

server.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
});

// Keep the process running
process.on('SIGINT', () => {
  server.kill('SIGINT');
  process.exit(0);
});





