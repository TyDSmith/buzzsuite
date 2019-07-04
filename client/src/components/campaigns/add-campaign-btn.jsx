import React, { Component } from "react";
import Modal from "react-modal";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import CampaignInputForm from "./campaign-input-form";

class AddCampaignButton extends Component {
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

  isPaneOpen = () => {
    this.setState({isPaneOpen: false})
  }

  render() {
    return (
      <div ref={ref => (this.el = ref)}>
        <button
          class="add-button"
          onClick={() => this.setState({ isPaneOpen: true })}
        >
          Add Campaign
        </button>
        <div style={{ marginTop: "32px" }} />
        <SlidingPane
          className="some-custom-class"
          overlayClassName="some-custom-overlay-class"
          isOpen={this.state.isPaneOpen}
          title="Add Campaign"
          width="500px"
          onRequestClose={() => {
            // triggered on "<" on left top click or on outside click
            this.setState({ isPaneOpen: false });
          }}
        >
          <CampaignInputForm isPaneOpen={this.isPaneOpen} UserInfo={this.props.UserInfo}/>
        </SlidingPane>
      </div>
    );
  }
}

export default AddCampaignButton;
