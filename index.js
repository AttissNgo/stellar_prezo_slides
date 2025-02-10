const Card = ({ className, children }) => (
  <div
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
  >
    {children}
  </div>
);

const PresentationContainer = () => {
  const [currentPage, setCurrentPage] = React.useState(0);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className="min-h-screen bg-white">
      {currentPage === 0 && (
        <div>
          <StellarPresentation />
          <div className="fixed bottom-8 right-8">
            <button
              onClick={nextPage}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Next: Soroban Details →
            </button>
          </div>
        </div>
      )}

      {currentPage === 1 && (
        <div>
          <SorobanPresentation />
          <div className="fixed bottom-8 right-8 flex gap-4">
            <button
              onClick={prevPage}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              ← Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const StellarPresentation = () => {
  return (
    <div className="space-y-8 p-4">
      {/* Title Slide */}
      <Card className="p-6 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Stellar Blockchain
            </h1>
            <p className="text-xl text-white">An Overview of the Network</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 236.36 200"
            className="w-24 h-24 text-white"
            fill="currentColor"
          >
            <title>Asset 1</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path d="M203,26.16l-28.46,14.5-137.43,70a82.49,82.49,0,0,1-.7-10.69A81.87,81.87,0,0,1,158.2,28.6l16.29-8.3,2.43-1.24A100,100,0,0,0,18.18,100q0,3.82.29,7.61a18.19,18.19,0,0,1-9.88,17.58L0,129.57V150l25.29-12.89,0,0,8.19-4.18,8.07-4.11v0L186.43,55l16.28-8.29,33.65-17.15V9.14Z" />
                <path d="M236.36,50,49.78,145,33.5,153.31,0,170.38v20.41l33.27-16.95,28.46-14.5L199.3,89.24A83.45,83.45,0,0,1,200,100,81.87,81.87,0,0,1,78.09,171.36l-1,.53-17.66,9A100,100,0,0,0,218.18,100c0-2.57-.1-5.14-.29-7.68a18.2,18.2,0,0,1,9.87-17.58l8.6-4.38Z" />
              </g>
            </g>
          </svg>
        </div>
      </Card>

      {/* History Slide */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Network History</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="w-24 text-blue-600 font-bold">2014</div>
            <div>
              <p>Founded by Jed McCaleb and Joyce Kim</p>
              <p>Launched by the Stellar Development Foundation (SDF)</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-24 text-blue-600 font-bold">2015</div>
            <div>
              <p>Major protocol upgrade to Stellar Consensus Protocol (SCP)</p>
              <p>Departure from Ripple consensus model</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-24 text-blue-600 font-bold">2017</div>
            <div>
              <p>IBM partnership announced</p>
              <p>Launch of cross-border payment network</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-24 text-blue-600 font-bold">2023</div>
            <div>
              <p>Launch of Soroban smart contracts platform</p>
              <p>Major expansion of network capabilities</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Key Stats Slide */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Network Statistics</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-4xl font-bold text-blue-600">4-5 seconds</p>
            <p className="text-gray-600">Average Transaction Time</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-4xl font-bold text-blue-600">~0.00001 XLM</p>
            <p className="text-gray-600">Transaction Fee</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-4xl font-bold text-blue-600">50B</p>
            <p className="text-gray-600">Total XLM Supply</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-4xl font-bold text-blue-600">3000+</p>
            <p className="text-gray-600">Transactions per Second</p>
          </div>
        </div>
      </Card>

      {/* Consensus Protocol Slide */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          Stellar Consensus Protocol (SCP)
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-bold text-blue-600 mb-2">
              Key Features
            </h3>
            <div className="space-y-2">
              <div>• Federated Byzantine Agreement model</div>
              <div>• 4-5 second transaction finality</div>
              <div>• Energy efficient - no mining required</div>
            </div>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="text-lg font-bold text-purple-600 mb-2">
              How It Works
            </h3>
            <div className="space-y-2">
              <div>• Nodes choose trusted validators (quorum slices)</div>
              <div>• Consensus through overlapping trust</div>
              <div>• Two-phase protocol: nomination and balloting</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Use Cases Slide */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Primary Use Cases</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-3 bg-blue-50 rounded-lg">
            <h3 className="text-md font-bold text-blue-600 mb-1">
              Cross-Border Payments
            </h3>
            <p className="text-sm">Fast and low-cost international transfers</p>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg">
            <h3 className="text-md font-bold text-purple-600 mb-1">
              Financial Inclusion
            </h3>
            <p className="text-sm">Banking for unbanked populations</p>
          </div>
          <div className="p-3 bg-green-50 rounded-lg">
            <h3 className="text-md font-bold text-green-600 mb-1">
              Asset Tokenization
            </h3>
            <p className="text-sm">Digital representation of assets</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

const SorobanPresentation = () => {
  return (
    <div className="space-y-8 p-4">
      {/* Title Slide */}
      <Card className="p-6 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Soroban Smart Contracts
            </h1>
            <p className="text-xl text-white">Technical Details</p>
          </div>
        </div>
      </Card>

      {/* Environment Stats */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Environment Specifications</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-4xl font-bold text-blue-600">Rust</p>
            <p className="text-gray-600">Development Language</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-4xl font-bold text-blue-600">WebAssembly</p>
            <p className="text-gray-600">Runtime Environment</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-4xl font-bold text-blue-600">128 KB</p>
            <p className="text-gray-600">Max Contract Size</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-4xl font-bold text-blue-600">64 KB</p>
            <p className="text-gray-600">Max Storage Entry</p>
          </div>
        </div>
      </Card>

      {/* Storage Model */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Storage Model</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-bold text-blue-600 mb-2">
                Host-Managed Storage
              </h3>
              <div className="space-y-2">
                <div>• Explicit TTL for all stored data</div>
                <div>• Automatic cleanup of expired entries</div>
                <div>• Protocol-level archival system</div>
              </div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-bold text-purple-600 mb-2">
                Key Benefits
              </h3>
              <div className="space-y-2">
                <div>• Prevents state bloat</div>
                <div>• Predictable chain growth</div>
                <div>• Clear ownership costs</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="text-lg font-bold text-green-600 mb-2">
                Cost Model
              </h3>
              <div className="space-y-2">
                <div>• Upfront payment for space</div>
                <div>• Rent based on size and time</div>
                <div>• Extendable lifetimes</div>
              </div>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg">
              <h3 className="text-lg font-bold text-amber-600 mb-2">
                Storage Types
              </h3>
              <div className="space-y-2">
                <div>• Instance storage</div>
                <div>• Persistent storage</div>
                <div>• Temporary storage</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">
            Example: Counter Contract with Instance Storage
          </h3>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm whitespace-pre">{`#![no_std]
use soroban_sdk::{contract, contractimpl, log, symbol_short, Env, Symbol};

const COUNTER: Symbol = symbol_short!("COUNTER");

#[contract]
pub struct IncrementContract;

#[contractimpl]
impl IncrementContract {
    /// Increment increments an internal counter, and returns the value.
    pub fn increment(env: Env) -> u32 {
        let mut count: u32 = env.storage().instance().get(&COUNTER).unwrap_or(0);
        
        count += 1;
        log!(&env, "count: {}", count);
        env.storage().instance().set(&COUNTER, &count);
        env.storage().instance().extend_ttl(100, 100);
        count
    }

    /// Get the current counter value
    pub fn get_count(env: Env) -> u32 {
        env.storage().instance().get(&COUNTER).unwrap_or(0)
    }
}`}</pre>
        </div>
      </Card>

      {/* Auth Model */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Authorization Model</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-bold text-blue-600 mb-2">
                Address Abstraction
              </h3>
              <div className="space-y-2">
                <div>• Universal identifier for all parties</div>
                <div>• Represents accounts, contracts, or custom auth</div>
                <div>• Handles its own authentication internally</div>
              </div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-bold text-purple-600 mb-2">
                Simplified Auth Flow
              </h3>
              <div className="space-y-2">
                <div>• Just call address.require_auth()</div>
                <div>• Host handles signature verification</div>
                <div>• Automatic replay protection</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="text-lg font-bold text-green-600 mb-2">
                Cross-Contract Auth
              </h3>
              <div className="space-y-2">
                <div>• Auth flows through contract calls</div>
                <div>• Multiple addresses can authorize</div>
                <div>• Permissions stay in intended flow</div>
              </div>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg">
              <h3 className="text-lg font-bold text-amber-600 mb-2">
                Key Benefits
              </h3>
              <div className="space-y-2">
                <div>• No signature handling in contracts</div>
                <div>• Works with any auth scheme</div>
                <div>• Protocol-level security</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">
            Example: Basic Authorization Check
          </h3>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm whitespace-pre">{`pub fn increment(env: Env, user: Address, amount: i128) -> i128 {
    // Require authorization from the user
    user.require_auth();
    
    // Rest of function...
}`}</pre>
        </div>
      </Card>

      {/* EVENTS */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Contract Events</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-bold text-blue-600 mb-2">
              Event Structure
            </h3>
            <div className="space-y-2">
              <div>• Events have topics and data</div>
              <div>• Up to 4 topics for indexing</div>
              <div>• Data can be any contract type</div>
            </div>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="text-lg font-bold text-purple-600 mb-2">
              Event Behavior
            </h3>
            <div className="space-y-2">
              <div>• Discarded if contract fails</div>
              <div>• Published only on success</div>
              <div>• Available to external consumers</div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">Example: Transfer Event</h3>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm whitespace-pre">{`pub fn transfer(env: Env, from: Address, to: Address, amount: i128) {
    // transfer logic omitted here
    env.events().publish(
        (symbol_short!("transfer"), from, to),
        amount
    );
}`}</pre>
        </div>
      </Card>
    </div>
  );
};

ReactDOM.render(<PresentationContainer />, document.getElementById("root"));
