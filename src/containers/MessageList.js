import { connect } from "react-redux";
import Submissions from "../components/Submissions";
import { addMessage } from "../actions/index";

function mapStateToProps(state) {
  return {
    messages: state,
  };
}

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (message) => dispatch(addMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Submissions);
