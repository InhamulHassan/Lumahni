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
  getAuthorById,
  resetGetAuthorById
} from "../../redux/actions/authorDbAction";
import {
  getAuthorByGrId,
  resetGetAuthorByGrId
} from "../../redux/actions/authorGrAction";
import styles from "./styles";

const { width } = Dimensions.get("window");
const optionWith = (width - 0) / 3 - 10;

class AuthorScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      highlightStatus: false
    };
  }

  componentDidMount() {
    const { navigation, getAuthorById, getAuthorByGrId } = this.props;
    // get the author_id/author_grid from the navigation props, and give it a fallback value if the value is undefined
    getAuthorByGrId(navigation.getParam("authorGrid", "1"));
    getAuthorById(navigation.getParam("authorId", "1"));
  }

  componentWillUnmount() {
    const { resetGetAuthorById, resetGetAuthorByGrId } = this.props;
    // reset the state when unmounting the view
    resetGetAuthorById();
    resetGetAuthorByGrId();
  }

  // read more component functions
  renderViewMore = onPress => {
    return (
      <Text style={styles.authorBioMore} onPress={onPress}>
        View more
      </Text>
    );
  };

  renderViewLess = onPress => {
    return (
      <Text style={styles.authorBioMore} onPress={onPress}>
        View less
      </Text>
    );
  };

  renderAuthorBio = () => {
    const { authorDetails } = this.props;

    if (!Object.keys(authorDetails).length > 0) return null;

    if (!authorDetails) return null;

    const { bio } = authorDetails;
    return (
      <View style={styles.authorBioContainer}>
        <ViewMoreText
          numberOfLines={8}
          renderViewMore={this.renderViewMore}
          renderViewLess={this.renderViewLess}
          textStyle={{ textAlign: "justify" }}
        >
          <Text style={styles.authorBioText}>{bio}</Text>
        </ViewMoreText>
      </View>
    );
  };

  renderAuthorBooks() {
    const { authorGrDetails, authorGrLoading, authorGrError } = this.props;

    if (!Object.keys(authorGrDetails).length > 0) return null;

    if (!authorGrDetails.author) return null;

    const { books } = authorGrDetails.author;

    if (!books) return null;

    if (authorGrLoading) {
      return (
        <View style={styles.rootView}>
          <ActivityIndicator />
        </View>
      );
    }

    if (authorGrError) {
      return (
        <Text style={styles.errorText}>{authorGrError.message || ""}</Text>
      );
    }

    if (books.length !== 0) {
      return (
        <View>
          <Text style={styles.booksByAuthorTitle}>
            Books By {authorGrDetails.author.name}
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
              <BookCard key={index} authorBookGr={book} />
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
    const {
      authorDetails,
      loading,
      error,
      navigation,
      authorGrDetails,
      authorGrLoading,
      authorGrError
    } = this.props;

    return (
      <View style={styles.rootView}>
        {error || authorGrError ? (
          <Text style={styles.errorText}>
            {error.message || authorGrError.message || ""}
          </Text>
        ) : (
          <ScrollView contentContainerStyle={styles.scrollView}>
            {loading || authorGrLoading ? (
              <View style={styles.rootView}>
                <ActivityIndicator size="large" />
              </View>
            ) : (
              <View>
                <ElevatedView style={styles.authorView} elevation={2}>
                  <ElevatedView elevation={3} style={styles.authorImageWrapper}>
                    {authorDetails.img_l && (
                      <Image
                        style={styles.authorImage}
                        source={{ uri: authorDetails.img_l }}
                        PlaceholderContent={<ActivityIndicator />}
                      />
                    )}
                  </ElevatedView>
                  {authorDetails.name && (
                    <View style={styles.authorNameContainer}>
                      <Text style={styles.authorName}>
                        {authorDetails.name}
                      </Text>
                    </View>
                  )}
                  {authorDetails.bio && this.renderAuthorBio()}
                  <TouchableHighlight
                    style={styles.favouriteButtonContainer}
                    activeOpacity={0.5}
                    underlayColor="#ffffff"
                    onPress={() => {}}
                    onHideUnderlay={this.onHideUnderlay}
                    onShowUnderlay={this.onShowUnderlay}
                  >
                    <LinearGradient
                      colors={["#FF647C", "#FDAFBB"]}
                      start={{ x: 0, y: 1 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.favouriteButtonGradient}
                    >
                      <Icon
                        name={this.state.highlightStatus ? "favorite" : "favorite-border"}
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
                <View>
                  {!!authorGrDetails.author && this.renderAuthorBooks()}
                </View>
              </View>
            )}
          </ScrollView>
        )}
      </View>
    );
  }
}

AuthorScreen.propTypes = {
  getAuthorById: PropTypes.func.isRequired,
  resetGetAuthorById: PropTypes.func.isRequired,
  getAuthorByGrId: PropTypes.func.isRequired,
  resetGetAuthorByGrId: PropTypes.func.isRequired,
  authorDetails: PropTypes.object.isRequired,
  authorGrDetails: PropTypes.object.isRequired
};

AuthorScreen.defaultProps = {
  getAuthorById: () => {},
  resetGetAuthorById: () => {},
  getAuthorByGrId: () => {},
  resetGetAuthorByGrId: () => {},
  authorDetails: {},
  loading: true,
  error: "",
  authorGrDetails: {},
  authorGrLoading: true,
  authorGrError: ""
};

const mapStateToProps = state => {
  return {
    authorDetails: state.author.authorDetails,
    loading: state.author.dataLoading,
    error: state.author.error,
    authorGrDetails: state.author_gr.authorDetails.data,
    authorGrLoading: state.author_gr.dataLoading,
    authorGrError: state.author_gr.error
  };
};

const mapDispatchToProps = {
  getAuthorById,
  resetGetAuthorById,
  getAuthorByGrId,
  resetGetAuthorByGrId
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorScreen);
