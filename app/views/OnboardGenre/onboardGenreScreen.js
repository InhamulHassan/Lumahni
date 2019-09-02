import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { ActivityIndicator, View, Text } from "react-native";
import GenreToggleCard from "../../components/GenreToggleCard";
import { FlatGrid } from "react-native-super-grid";
import { getGenres } from "../../redux/actions/genreDbAction";
import styles from "./styles";

class OnboardGenreScreen extends Component<Props> {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getGenres();
  }

  render() {
    const { genres, loading, error } = this.props;
    return (
      <View style={styles.genreView}>
        {error ? (
          <Text style={styles.errorText}>{error.message || ""}</Text>
        ) : loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatGrid
            itemDimension={100}
            items={genres}
            renderItem={({ item }) => {
              return <GenreToggleCard text={item.name} imgUrl={item.img_m} />;
            }}
          />
        )}
      </View>
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
