import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from "react";

const TypographyPage = () => {
  return (
    <AuthenticatedLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Typography Guide</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Type</th>
                <th className="border border-gray-300 px-4 py-2">Heavy: Black</th>
                <th className="border border-gray-300 px-4 py-2">Bold: Bold</th>
                <th className="border border-gray-300 px-4 py-2">Medium: Medium</th>
                <th className="border border-gray-300 px-4 py-2">Regular: Regular</th>
                <th className="border border-gray-300 px-4 py-2">Light: Light</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Header one</td>
                <td className="border border-gray-300 px-4 py-2 text-hb-h1">Header one</td>
                <td className="border border-gray-300 px-4 py-2 text-b-h1">Header one</td>
                <td className="border border-gray-300 px-4 py-2 text-m-h1">Header one</td>
                <td className="border border-gray-300 px-4 py-2 text-r-h1">Header one</td>
                <td className="border border-gray-300 px-4 py-2 text-l-h1">Header one</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Header two</td>
                <td className="border border-gray-300 px-4 py-2  text-hb-h2">Header two</td>
                <td className="border border-gray-300 px-4 py-2  text-b-h2">Header two</td>
                <td className="border border-gray-300 px-4 py-2  text-m-h2">Header two</td>
                <td className="border border-gray-300 px-4 py-2  text-r-h2">Header two</td>
                <td className="border border-gray-300 px-4 py-2  text-l-h2">Header two</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Header three</td>
                <td className="border border-gray-300 px-4 py-2  text-hb-h3">Header three</td>
                <td className="border border-gray-300 px-4 py-2  text-b-h3">Header three</td>
                <td className="border border-gray-300 px-4 py-2  text-m-h3">Header three</td>
                <td className="border border-gray-300 px-4 py-2  text-r-h3">Header three</td>
                <td className="border border-gray-300 px-4 py-2  text-l-h3">Header three</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Header four</td>
                <td className="border border-gray-300 px-4 py-2  text-hb-h4">Header four</td>
                <td className="border border-gray-300 px-4 py-2  text-b-h4">Header four</td>
                <td className="border border-gray-300 px-4 py-2  text-m-h4">Header four</td>
                <td className="border border-gray-300 px-4 py-2  text-r-h4">Header four</td>
                <td className="border border-gray-300 px-4 py-2  text-l-h4">Header four</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Header five</td>
                <td className="border border-gray-300 px-4 py-2  text-hb-h5">Header five</td>
                <td className="border border-gray-300 px-4 py-2  text-b-h5">Header five</td>
                <td className="border border-gray-300 px-4 py-2  text-m-h5">Header five</td>
                <td className="border border-gray-300 px-4 py-2  text-r-h5">Header five</td>
                <td className="border border-gray-300 px-4 py-2  text-l-h5">Header five</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Body</td>
                <td className="border border-gray-300 px-4 py-2  text-hb-b">Body</td>
                <td className="border border-gray-300 px-4 py-2  text-b-b">Body</td>
                <td className="border border-gray-300 px-4 py-2  text-m-b">Body</td>
                <td className="border border-gray-300 px-4 py-2  text-r-b">Body</td>
                <td className="border border-gray-300 px-4 py-2  text-l-b">Body</td>
                </tr>
            
              <tr className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Caption</td>
                <td className="border border-gray-300 px-4 py-2 text-hb-c">Caption</td>
                <td className="border border-gray-300 px-4 py-2  text-b-c">Caption</td>
                <td className="border border-gray-300 px-4 py-2  text-m-c">Caption</td>
                <td className="border border-gray-300 px-4 py-2  text-r-c">Caption</td>
                <td className="border border-gray-300 px-4 py-2  text-l-c">Caption</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Tiny</td>
                <td className="border border-gray-300 px-4 py-2 text-hb-t">Tiny</td>
                <td className="border border-gray-300 px-4 py-2  text-b-t">Tiny</td>
                <td className="border border-gray-300 px-4 py-2  text-m-t">Tiny</td>
                <td className="border border-gray-300 px-4 py-2  text-r-t">Tiny</td>
                <td className="border border-gray-300 px-4 py-2  text-l-t">Tiny</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Footnote</td>
                <td className="border border-gray-300 px-4 py-2 text-hb-f">Footnote</td>
                <td className="border border-gray-300 px-4 py-2  text-b-f">Footnote</td>
                <td className="border border-gray-300 px-4 py-2  text-m-f">Footnote</td>
                <td className="border border-gray-300 px-4 py-2  text-r-f">Footnote</td>
                <td className="border border-gray-300 px-4 py-2  text-l-f">Footnote</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default TypographyPage;
