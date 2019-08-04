import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./styles";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  View
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import BookCard from "../../components/BookCard";
import { NavigationScreenProps } from "react-navigation";
import PropTypes from "prop-types";
import {
  getBookById,
  resetGetBookById
} from "../../redux/actions/bookDbAction";
import {
  getBookByGrId,
  resetGetBookByGrId
} from "../../redux/actions/bookGrAction";
import ElevatedView from "react-native-elevated-view";
import ViewMoreText from "react-native-view-more-text";

const { width } = Dimensions.get("window");
const optionWith = (width - 0) / 3 - 10;

class BookScreen extends Component<Props> {
  componentDidMount() {
    const { navigation, getBookById, getBookByGrId } = this.props;
    // get the book_id/book_grid from the navigation props, and give it a fallback value if the value is undefined
    getBookById(navigation.getParam("bookId", "1"));
    getBookByGrId(navigation.getParam("bookGrid", "1"));
  }

  componentWillUnmount() {
    const { resetGetBookById, resetGetBookByGrId } = this.props;
    // reset the state when unmounting the view
    resetGetBookById();
    resetGetBookByGrId();
  }

  // read more component functions
  renderViewMore = onPress => {
    return (
      <Text style={styles.bookDescriptionMore} onPress={onPress}>
        View more
      </Text>
    );
  };

  renderViewLess = onPress => {
    return (
      <Text style={styles.bookDescriptionMore} onPress={onPress}>
        View less
      </Text>
    );
  };

  renderAuthors = () => {
    const { bookDetails, navigation } = this.props;
    if (!Object.keys(bookDetails).length > 0) return null;

    if (!bookDetails) return null;

    const length = Object.keys(bookDetails.authors).length;

    return (
      <View style={styles.authorGroup}>
        {bookDetails.authors.map((author, index) => (
          <View style={styles.authorContainer} key={author.id}>
            <Text
              onPress={() =>
                navigation.navigate("AuthorScreen", {
                  authorId: author.id,
                  authorGrid: author.grid
                })
              }
              style={styles.authorName}
            >
              {author.name}
              {index < length - 1 ? ", " : ""}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  renderBookDescription = () => {
    const { bookDetails } = this.props;

    if (!Object.keys(bookDetails).length > 0) return null;

    if (!bookDetails) return null;

    const { descr } = bookDetails;
    return (
      <View style={styles.bookDescriptionContainer}>
        <ViewMoreText
          numberOfLines={3}
          renderViewMore={this.renderViewMore}
          renderViewLess={this.renderViewLess}
          textStyle={{ textAlign: "justify" }}
        >
          <Text style={styles.bookDescriptionText}>{descr}</Text>
        </ViewMoreText>
      </View>
    );
  };

  renderBookDetails = () => {
    const { bookGrDetails } = this.props;

    if (!Object.keys(bookGrDetails).length > 0) return null;

    if (!bookGrDetails.book) return null;

    const {
      isbn,
      isbn13,
      num_pages,
      publisher,
      publication_year,
      bookDetail
    } = bookGrDetails.book;

    return (
      <View style={styles.bookDetailsContainer}>
        <Text style={styles.bookDetailsTitle}>Book Details</Text>
        {this.renderBookDetail(isbn, "ISBN")}
        {this.renderBookDetail(isbn13, "ISBN13")}
        {this.renderBookDetail(num_pages, "Pages")}
        {this.renderBookDetail(publisher, "Publisher")}
        {this.renderBookDetail(publication_year, "Publication Year")}
        {this.renderBookDetail(bookDetail, "Language")}
      </View>
    );
  };

  renderBookDetail = (data, label) => {
    return (
      !!data && (
        <Text style={styles.bookDetail}>
          {label}
          {": "}
          <Text style={styles.bookDetailValue}>{data}</Text>
        </Text>
      )
    );
  };

  renderSimilarBooks() {
    const { bookGrDetails, bookGrLoading, bookGrError } = this.props;

    if (!Object.keys(bookGrDetails).length > 0) return null;

    if (!bookGrDetails.book) return null;

    const { similar_books } = bookGrDetails.book;

    if (!similar_books) return null;

    if (bookGrLoading) {
      return (
        <View style={styles.rootView}>
          <ActivityIndicator />
        </View>
      );
    }

    if (bookGrError) {
      return <Text style={styles.errorText}>{bookGrError.message || ""}</Text>;
    }

    if (similar_books.length !== 0) {
      return (
        <View>
          <Text style={styles.similarBooksTitle}>Similar Books</Text>
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
            style={styles.similarBooksScroll}
          >
            {similar_books.map((book, index) => (
              <BookCard key={index} bookGr={book} />
            ))}
          </ScrollView>
        </View>
      );
    }
  }

  render() {
    const {
      bookDetails,
      loading,
      error,
      navigation,
      bookGrDetails,
      bookGrLoading,
      bookGrError
    } = this.props;

    return (
      <View style={styles.rootView}>
        {error || bookGrError ? (
          <Text style={styles.errorText}>
            {error.message || bookGrError.message || ""}
          </Text>
        ) : (
          <ScrollView contentContainerStyle={styles.scrollView}>
            {loading || bookGrLoading ? (
              <View style={styles.rootView}>
                <ActivityIndicator />
              </View>
            ) : (
              <View>
                <ElevatedView style={styles.bookView} elevation={2}>
                  <ElevatedView elevation={3} style={styles.bookImageWrapper}>
                    {bookDetails.img && (
                      <Image
                        style={styles.bookImage}
                        source={{ uri: bookDetails.img }}
                      />
                    )}
                  </ElevatedView>
                  {bookDetails.title && (
                    <View style={styles.bookTitleContainer}>
                      <Text style={styles.bookTitle}>{bookDetails.title}</Text>
                    </View>
                  )}
                  {bookDetails.authors && this.renderAuthors()}
                  {bookDetails.descr && this.renderBookDescription()}
                  <TouchableOpacity
                    style={styles.previewButtonContainer}
                    activeOpacity={0.5}
                    onPress={() => {}}
                  >
                    <LinearGradient
                      colors={["#6979F8", "#A5AFBB"]}
                      start={{ x: 0, y: 1 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.previewButtonGradient}
                    >
                      <Text style={styles.previewButtonText}>Preview</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.holdButtonContainer}
                    activeOpacity={0.5}
                    onPress={() => {}}
                  >
                    <LinearGradient
                      colors={["#6979F8", "#A5AFBB"]}
                      start={{ x: 0, y: 1 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.holdButtonGradient}
                    >
                      <View style={styles.holdButtonView}>
                        <Text style={styles.holdButtonText}>Place Hold</Text>
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                </ElevatedView>
                <ElevatedView style={styles.bookDetailsView} elevation={2}>
                  {!!bookGrDetails.book && this.renderBookDetails()}
                </ElevatedView>
                <View>{!!bookGrDetails.book && this.renderSimilarBooks()}</View>
              </View>
            )}
          </ScrollView>
        )}
      </View>
    );
  }
}

BookScreen.propTypes = {
  getBookById: PropTypes.func.isRequired,
  resetGetBookById: PropTypes.func.isRequired,
  getBookByGrid: PropTypes.func.isRequired,
  resetGetBookByGrid: PropTypes.func.isRequired,
  bookDetails: PropTypes.object.isRequired,
  bookGrDetails: PropTypes.object.isRequired
};

BookScreen.defaultProps = {
  getBookById: () => {},
  resetGetBookById: () => {},
  getBookByGrid: () => {},
  resetGetBookByGrid: () => {},
  bookDetails: {},
  loading: true,
  error: "",
  bookGrDetails: {},
  bookGrLoading: true,
  bookGrError: ""
};

const mapStateToProps = state => {
  return {
    bookDetails: state.book.bookDetails,
    loading: state.book.dataLoading,
    error: state.book.error,
    bookGrDetails: state.book_gr.bookDetails.data,
    bookGrLoading: state.book_gr.dataLoading,
    bookGrError: state.book_gr.error
  };
};

const mapDispatchToProps = {
  getBookById,
  resetGetBookById,
  getBookByGrId,
  resetGetBookByGrId
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookScreen);
