import React, { Component } from "react";
import { GenreView, GenreText } from "./styles";
import { ActivityIndicator, Text } from "react-native";
import GenreToggle from "../../components/GenreToggleCard";
import { FlatGrid } from "react-native-super-grid";
import { getGenre } from "../../redux/actions/genreAction";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { DEVELOPMENT_SERVER_URL } from "react-native-dotenv";

class OnboardGenreScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      genre: [],
      error: ""
    };
  }

  componentDidMount() {
    this.props.getGenre();
  }

  render() {
    const { genre, loading, error } = this.props;
    return (
      <GenreView>
        {/* <GenreToggle
          text="Click"
          textColor="#01d1e5"
          backgroundColor="lavenderblush"
          imgSrc={require("../../assets/images/art-genre.jpg")}
        /> */}
        {/* <GenreToggle /> */}
        {loading === true ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatGrid
            itemDimension={100}
            items={genre}
            renderItem={({ item }) => {
              return (
                <GenreToggle
                  text={item.name}
                  imgSrc={{
                    uri: `${DEVELOPMENT_SERVER_URL}/assets/images/${
                      item.img_s
                    }.jpg`
                  }}
                />
              );
            }}
          />
        )}
      </GenreView>
    );
  }
}

OnboardGenreScreen.propTypes = {
  getGenre: PropTypes.func.isRequired,
  genre: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

const mapStateToProps = state => {
  return {
    genre: state.data,
    loading: state.dataLoading,
    error: state.error
  };
};

const mapDispatchToProps = {
  getGenre
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnboardGenreScreen);
