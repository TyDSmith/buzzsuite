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
    console.log (this.props)
    Modal.setAppElement(this.el);
  }

  isPaneOpen = () => {
    this.setState({isPaneOpen: false})
  }

  render() {
    return (
      <div ref={ref => (this.el = ref)}>
        <button
          class="add-influencer-button"
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
          
          <InfluencerInputForm UserInfo={this.props.UserInfo} isPaneOpen={this.isPaneOpen}/>
          <p>
            To add a campaign to an existing influencer please click on the
            influencer in the table
          </p>
        </SlidingPane>
      </div>
    );
  }
}

export default AddInfluencerButton;
