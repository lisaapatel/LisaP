import React from 'react';
import { Layout } from '../components/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="section-container">
        <div className="max-w-5xl mx-auto space-y-12 py-12">
          <section className="space-y-6">
            <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
            <p className="text-xl">
              I'm a product manager with experience in building digital products.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
} 