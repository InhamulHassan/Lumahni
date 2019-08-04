import React, { Component } from "react";
import { GenreView, GenreText } from "./styles";
import { ActivityIndicator, Text } from "react-native";
import GenreToggleCard from "../../components/GenreToggleCard";
import { FlatGrid } from "react-native-super-grid";
import { getGenres } from "../../redux/actions/genreDbAction";
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
    this.props.getGenres();
  }

  render() {
    const { genres, loading, error } = this.props;
    console.log(JSON.stringify(genres))
    return (
      <GenreView>
        {!!loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatGrid
            itemDimension={100}
            items={genres}
            renderItem={({ item }) => {
              return (
                <GenreToggleCard
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
  getGenres: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

const mapStateToProps = state => {
  return {
    genres: state.genre.data,
    loading: state.genre.dataLoading,
    error: state.genre.error
  };
};

const mapDispatchToProps = {
  getGenres
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnboardGenreScreen);
