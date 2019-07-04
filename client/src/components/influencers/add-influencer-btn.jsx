import React, { Component } from "react";
import Modal from "react-modal";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import InfluencerInputForm from "./influencer-input-form";

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
        <button
          class="add-button"
          onClick={() => this.setState({ isPaneOpen: true })}
        >
          Add Influencer
        </button>
        <div style={{ marginTop: "32px" }} />
        <SlidingPane
          className="some-custom-class"
          overlayClassName="some-custom-overlay-class"
          isOpen={this.state.isPaneOpen}
          title="Add Influencer"
          width="500px"
          onRequestClose={() => {
            // triggered on "<" on left top click or on outside click
            this.setState({ isPaneOpen: false });
          }}
        >
          <InfluencerInputForm />
          <p>
            To add a campaign to an existing influencer please click on the
            influencer in the table
          </p>
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
