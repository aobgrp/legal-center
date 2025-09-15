export default function Licenses() {
  // Actual license data from CSV
  const licenses = [
    { state: 'Alaska', licenseNumber: '16235' },
    { state: 'Alabama', licenseNumber: '220277' },
    { state: 'Arkansas', licenseNumber: '100109472' },
    { state: 'Arizona', licenseNumber: '1800000925' },
    { state: 'California', licenseNumber: '783129' },
    { state: 'Colorado', licenseNumber: '85776' },
    { state: 'Connecticut', licenseNumber: '1011874' },
    { state: 'District of Columbia', licenseNumber: '2813369' },
    { state: 'Delaware', licenseNumber: '154433' },
    { state: 'Florida', licenseNumber: 'L044900' },
    { state: 'Georgia', licenseNumber: '73841' },
    { state: 'Hawaii', licenseNumber: '1499729' },
    { state: 'Iowa', licenseNumber: '1002052739' },
    { state: 'Idaho', licenseNumber: '30894' },
    { state: 'Illinois', licenseNumber: '100310679' },
    { state: 'Indiana', licenseNumber: '279012N' },
    { state: 'Kansas', licenseNumber: '1499729' },
    { state: 'Kentucky', licenseNumber: 'DOI-397758' },
    { state: 'Louisiana', licenseNumber: '319878' },
    { state: 'Massachusetts', licenseNumber: '1499729' },
    { state: 'Maryland', licenseNumber: '103663' },
    { state: 'Maine', licenseNumber: 'AGN84986' },
    { state: 'Michigan', licenseNumber: '17234' },
    { state: 'Minnesota', licenseNumber: '20456782' },
    { state: 'Missouri', licenseNumber: '2627' },
    { state: 'Mississippi', licenseNumber: '9708751' },
    { state: 'Montana', licenseNumber: '968466' },
    { state: 'North Carolina', licenseNumber: '1000003823' },
    { state: 'North Dakota', licenseNumber: '20291629' },
    { state: 'Nebraska', licenseNumber: '100184802' },
    { state: 'New Hampshire', licenseNumber: '353340' },
    { state: 'New Jersey', licenseNumber: '9837560' },
    { state: 'New Mexico', licenseNumber: '1800002315' },
    { state: 'Nevada', licenseNumber: '18295' },
    { state: 'New York', licenseNumber: 'LA-869352' },
    { state: 'Ohio', licenseNumber: '25830' },
    { state: 'Oklahoma', licenseNumber: '100104807' },
    { state: 'Oregon', licenseNumber: '100159882' },
    { state: 'Pennsylvania', licenseNumber: '64812' },
    { state: 'Rhode Island', licenseNumber: '3000005240' },
    { state: 'South Carolina', licenseNumber: '1903187415' },
    { state: 'South Dakota', licenseNumber: '1499729' },
    { state: 'Tennessee', licenseNumber: '3002523087' },
    { state: 'Texas', licenseNumber: '18427' },
    { state: 'Utah', licenseNumber: '102625' },
    { state: 'Virginia', licenseNumber: '111907' },
    { state: 'Vermont', licenseNumber: '3002870377' },
    { state: 'Washington', licenseNumber: '141258' },
    { state: 'Wisconsin', licenseNumber: '30000642017' },
    { state: 'West Virginia', licenseNumber: '100111496' },
    { state: 'Wyoming', licenseNumber: '5578' },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Licenses</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              American Online Benefits Group operates as an insurance agency that does business under the name <strong>Gallagher Affinity Insurance Services, Inc.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We maintain active licenses in the following states:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    State
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    License Number
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {licenses.map((license, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {license.state}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {license.licenseNumber}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
