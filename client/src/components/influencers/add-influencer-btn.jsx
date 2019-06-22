import React, { Component } from "react";
import Modal from "react-modal";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

class AddInfluencerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaneOpen: false,
      isPaneOpenLeft: false
    };
  }

  componentDidMount() {
    Modal.setAppElement(this.el);
  }

  render() {
    return (
      <div ref={ref => (this.el = ref)}>
        <button onClick={() => this.setState({ isPaneOpen: true })}>
          Add Influencer
        </button>
        <div style={{ marginTop: "32px" }} />
        <SlidingPane
          className="some-custom-class"
          overlayClassName="some-custom-overlay-class"
          isOpen={this.state.isPaneOpen}
          title="Add Influencer"
          subtitle="Optional subtitle."
          onRequestClose={() => {
            // triggered on "<" on left top click or on outside click
            this.setState({ isPaneOpen: false });
          }}
        >
          <div>And I am pane content</div>
          {/* <form action="">
            <input>Influencer name</input>
          </form> */}
          <br />
        </SlidingPane>
        <SlidingPane
          closeIcon={<div>Some div containing custom close icon.</div>}
          isOpen={this.state.isPaneOpenLeft}
          title="Hey, it is optional pane title.  I can be React component too."
          from="left"
          width="200px"
          onRequestClose={() => this.setState({ isPaneOpenLeft: false })}
        >
          <div>And I am pane content on left.</div>
        </SlidingPane>
      </div>
    );
  }
}

// class AddInfluencerButton extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       showModal: false
//     };

//     this.handleOpenModal = this.handleOpenModal.bind(this);
//     this.handleCloseModal = this.handleCloseModal.bind(this);
//   }

//   handleOpenModal() {
//     this.setState({ showModal: true });
//   }

//   handleCloseModal() {
//     this.setState({ showModal: false });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleOpenModal}>Add Influencer</button>
//         <ReactModal
//           isOpen={this.state.showModal}
//           contentLabel="Minimal Modal Example"
//         >
//           <div>
//             <h2 class="modal-title">Add an Influencer</h2>
//             <button class="exit-modal" onClick={this.handleCloseModal}>
//               close
//             </button>
//           </div>
//         </ReactModal>
//       </div>
//     );
//   }
// }

// const props = {};

// //   return (
// //     <div class="add-influencer">
// //       <button class="btn-primary btn">Add an influencer</button>
// //     </div>
// //   );

export default AddInfluencerButton;
