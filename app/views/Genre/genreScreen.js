import React, { Component } from "react";
import { connect } from "react-redux";
import { NavigationScreenProps } from "react-navigation";
import PropTypes from "prop-types";
import {
  ActivityIndicator,
  Dimensions,
  Text,
  TouchableHighlight,
  ScrollView,
  View
} from "react-native";
import { Image } from "react-native-elements";
import BookCard from "../../components/BookCard";
import { Icon } from "react-native-elements";
import ElevatedView from "react-native-elevated-view";
import ViewMoreText from "react-native-view-more-text";
import LinearGradient from "react-native-linear-gradient";
import {
  getBooksByGenre,
  resetGetBooksByGenre
} from "../../redux/actions/genreDbAction";
import { DEVELOPMENT_SERVER_URL } from "react-native-dotenv";
import styles from "./styles";

const { width } = Dimensions.get("window");
const optionWith = (width - 0) / 3 - 10;

class GenreScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      highlightStatus: false
    };
  }

  componentDidMount() {
    const { navigation, getBooksByGenre } = this.props;
    // get the genre_id from the navigation props, and give it a fallback value if the value is undefined
    getBooksByGenre(navigation.getParam("genreId", "1"));
  }

  componentWillUnmount() {
    const { resetGetBooksByGenre } = this.props;
    // reset the state when unmounting the view
    resetGetBooksByGenre();
  }

  // read more component functions
  renderViewMore = onPress => {
    return (
      <Text style={styles.genreDescriptionMore} onPress={onPress}>
        View more
      </Text>
    );
  };

  renderViewLess = onPress => {
    return (
      <Text style={styles.genreDescriptionMore} onPress={onPress}>
        View less
      </Text>
    );
  };

  renderGenreDescription = () => {
    const { genreDetails } = this.props;

    if (!Object.keys(genreDetails).length > 0) return null;

    if (!genreDetails) return null;

    const { descr } = genreDetails;
    return (
      <View style={styles.genreDescriptionContainer}>
        <ViewMoreText
          numberOfLines={8}
          renderViewMore={this.renderViewMore}
          renderViewLess={this.renderViewLess}
          textStyle={{ textAlign: "justify" }}
        >
          <Text style={styles.genreDescriptionText}>{descr}</Text>
        </ViewMoreText>
      </View>
    );
  };

  renderGenreBooks() {
    const { genreDetails, loading, error } = this.props;

    if (loading) {
      return (
        <View style={styles.rootView}>
          <ActivityIndicator />
        </View>
      );
    }

    if (!Object.keys(genreDetails).length > 0) return null;

    if (!genreDetails) return null;

    const { books } = genreDetails;

    if (!books) return null;

    if (error) {
      return <Text style={styles.errorText}>{error.message || ""}</Text>;
    }

    if (books.length !== 0) {
      return (
        <View>
          <Text style={styles.booksByGenreTitle}>
            {genreDetails.name} Books
          </Text>
          <ScrollView
            // Horizontall scrolling
            horizontal={true}
            // Decelerate fast after the user lifts their finger
            decelerationRate={0.1}
            // Hide all scroll indicators
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            // Snap interval to stop at option edges
            snapToInterval={optionWith}
            contentContainerStyle={styles.similarBooksScroll}
          >
            {books.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </ScrollView>
        </View>
      );
    }
  }

  onHideUnderlay = () => {
    this.setState({ highlightStatus: false });
  };
  onShowUnderlay = () => {
    this.setState({ highlightStatus: true });
  };

  render() {
    const { genreDetails, loading, error } = this.props;

    const imgUrl = genreDetails.img_l || "";

    const imageURL = `${DEVELOPMENT_SERVER_URL}/assets/images/${imgUrl}.jpg`;

    return (
      <View style={styles.rootView}>
        {error ? (
          <Text style={styles.errorText}>{error.message || ""}</Text>
        ) : (
          <ScrollView contentContainerStyle={styles.scrollView}>
            {loading ? (
              <View style={styles.rootView}>
                <ActivityIndicator size="large" />
              </View>
            ) : (
              <View>
                <ElevatedView style={styles.genreView} elevation={2}>
                  <ElevatedView elevation={3} style={styles.genreImageWrapper}>
                    {imageURL && (
                      <Image
                        style={styles.genreImage}
                        source={{ uri: imageURL }}
                        PlaceholderContent={<ActivityIndicator />}
                      />
                    )}
                  </ElevatedView>
                  {genreDetails.name && (
                    <View style={styles.genreNameContainer}>
                      <Text style={styles.genreName}>{genreDetails.name}</Text>
                    </View>
                  )}
                  {this.renderGenreDescription()}
                  <TouchableHighlight
                    style={styles.favouriteButtonContainer}
                    activeOpacity={0.5}
                    underlayColor="#ffffff"
                    onPress={() => {}}
                    onHideUnderlay={this.onHideUnderlay}
                    onShowUnderlay={this.onShowUnderlay}
                  >
                    <LinearGradient
                      colors={["#BE52F2", "#DBA5F5"]}
                      start={{ x: 0, y: 1 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.favouriteButtonGradient}
                    >
                      <Icon
                        name={
                          this.state.highlightStatus
                            ? "favorite"
                            : "favorite-border"
                        }
                        size={16}
                        color="#ffffff"
                        type="ionicons"
                        containerStyle={styles.favouriteIcon}
                        onPress={() => {}}
                      />
                      <Text style={styles.favouriteButtonText}>
                        Add to Favourite
                      </Text>
                    </LinearGradient>
                  </TouchableHighlight>
                </ElevatedView>
                <View>{this.renderGenreBooks()}</View>
              </View>
            )}
          </ScrollView>
        )}
      </View>
    );
  }
}

GenreScreen.propTypes = {
  getBooksByGenre: PropTypes.func.isRequired,
  resetGetBooksByGenre: PropTypes.func.isRequired,
  genreDetails: PropTypes.object.isRequired
};

GenreScreen.defaultProps = {
  getBooksByGenre: () => {},
  resetGetBooksByGenre: () => {},
  genreDetails: {},
  loading: true,
  error: ""
};

const mapStateToProps = state => {
  return {
    genreDetails: state.genre.genreDetails,
    loading: state.genre.dataLoading,
    error: state.genre.error
  };
};

const mapDispatchToProps = {
  getBooksByGenre,
  resetGetBooksByGenre
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreScreen);
