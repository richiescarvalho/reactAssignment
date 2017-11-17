import React, { Component } from 'react';



class HomePage extends Component {
  render() {
    return (
			
			<div id="mainDiv" className="container" ><h1>Hello World!!</h1>
			<h3 >November 17 2017</h3>
				<p>
					Three Classes I'm taking are 
					<ul>
						<li>
							Algorithms & Computing Theory - The purpose of this course is to acquire a thorough grounding in the core principles and foundations of computer science. Students will learn methods for expressing and comparing algorithm complexity (worstand average-case upper bounds, lower bounds) as well as to verify correctness. Algorithm-design techniques (divide-and-conquer, dynamic programming) as well as data structures (trees, heaps, hash tables) widely used in modern software development will be studied. The knowledge gained will be applied to a variety of practical problems, such as searching, sorting, and graph problems (shortest paths, minimum divning trees).The question of what problems are hard to compute will be addressed with an introduction to NPcompleteness theory, including the development of the NP-complete classification and the identification of NP-hard problems by reductions.
						</li>
						<li>
							Concepts & Structers:Internet Computing - Integrated hands-on coverage of fundamental concepts and technologies for enterprise and Internet computing. Topics include data storage; XML data specification, parsing and validation; data and language translation; networking and web technology overview; software framework technology for controlling software system complexity; and a roadmap for the enterprise computing technologies.

						</li>
						<li>
							Intro to Parallel & Distributed Computing - Parallel computing theory: Parallel Random-Access Machines (PRAMs), Amdahl’s law for theoretical speedup limits, Petri Nets; parallel vs. distributed computing: speedup, fault-tolerance, resource-sharing; parallel architectures; data flow, instruction-level pipelining, embedded multicore systems, shared-memory. multiprocessors, distributed-memory multicomputers, interconnection networks, distributed systems: client-server systems, cluster computing, computing grids, cloud computing; parallel and distributed programming with industry standard MPI (Message Passing Interface); and parallel algorithms.
						</li>
					</ul>
				</p>
				<div className="video-div-homepage">
					<video controls>
						<source className="video-homepage-src" type="video/mp4" />
					</video>
				</div>
			</div>
    );
  }
}

export default HomePage;
