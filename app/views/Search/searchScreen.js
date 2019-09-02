import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavigationScreenProps, NavigationEvents } from "react-navigation";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { SearchBar } from "react-native-elements";
import SearchSuggestionChip from "../../components/SearchSuggestionChip";
import BookCardList from "../../components/BookCardList";
import AuthorCardList from "../../components/AuthorCardList";
import GenreCardList from "../../components/GenreCardList";
import {
  searchBooksByTitle,
  resetSearchBooksByTitle,
  searchAuthorsByName,
  resetSearchAuthorsByName,
  searchGenresByName,
  resetSearchGenresByName
} from "../../redux/actions/searchDbAction";
import { throttle, debounce } from "throttle-debounce";
import styles from "./styles";

class SearchScreen extends Component<Props> {
  constructor(props) {
    super(props);

    // throttling and debouncing searching books by title function
    this.searchBooksByTitleThrottled = throttle(
      50,
      this.props.searchBooksByTitle
    );
    this.searchBooksByTitleDebounced = debounce(
      800,
      this.props.searchBooksByTitle
    );

    // throttling and debouncing searching authors by name function
    this.searchAuthorsByNameThrottled = throttle(
      50,
      this.props.searchAuthorsByName
    );
    this.searchAuthorsByNameDebounced = debounce(
      800,
      this.props.searchAuthorsByName
    );

    // throttling and debouncing searching genre by name function
    this.searchGenresByNameThrottled = throttle(
      50,
      this.props.searchGenresByName
    );
    this.searchGenresByNameDebounced = debounce(
      800,
      this.props.searchGenresByName
    );

    this.state = {
      query: ""
    };
  }

  static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
    header: null
  });

  querySearch = query => {
    this.setState({ query }, () => {
      const query = this.state.query;
      if (query) {
        this.searchBooksByTitleDebounced(query);
        this.searchAuthorsByNameDebounced(query);
        this.searchGenresByNameDebounced(query);
        // if (query.length < 2) {
        //   this.searchBooksByTitleThrottled(query);
        //   this.searchAuthorsByNameThrottled(query);
        //   this.searchGenresByNameThrottled(query);
        // } else {
        //   this.searchBooksByTitleDebounced(query);
        //   this.searchAuthorsByNameDebounced(query);
        //   this.searchGenresByNameDebounced(query);
        // }
      }
    });
  };

  renderBooksByTitleResult() {
    const {
      booksByTitleLoading,
      booksByTitleData,
      booksByTitleError,
      navigation
    } = this.props;

    if (booksByTitleLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      );
    }

    if (booksByTitleError) {
      return (
        <Text style={styles.errorText}>{booksByTitleError.message || ""}</Text>
      );
    }

    if (!Object.keys(booksByTitleData).length > 0) return null;

    if (!booksByTitleData) return null;

    if (booksByTitleData.length !== 0) {
      return (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>Books</Text>
          <View style={styles.resultsGroup}>
            {booksByTitleData.map((book, index) => (
              <BookCardList
                key={index}
                book={book}
                onPress={() =>
                  navigation.replace("BookScreen", {
                    bookId: book.id,
                    bookGrid: book.grid
                  })
                }
              />
            ))}
          </View>
        </View>
      );
    }
  }

  renderAuthorsByNameResult() {
    const {
      authorsByNameLoading,
      authorsByNameData,
      authorsByNameError,
      navigation
    } = this.props;

    if (authorsByNameLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      );
    }

    if (authorsByNameError) {
      return (
        <Text style={styles.errorText}>{authorsByNameError.message || ""}</Text>
      );
    }

    if (!Object.keys(authorsByNameData).length > 0) return null;

    if (!authorsByNameData) return null;

    if (authorsByNameData.length !== 0) {
      return (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>Authors</Text>
          <View style={styles.resultsGroup}>
            {authorsByNameData.map((author, index) => (
              <AuthorCardList
                key={index}
                author={author}
                onPress={() =>
                  navigation.replace("AuthorScreen", {
                    authorId: author.id,
                    authorGrid: author.grid
                  })
                }
              />
            ))}
          </View>
        </View>
      );
    }
  }

  renderGenresByNameResult() {
    const {
      genresByNameLoading,
      genresByNameData,
      genresByNameError,
      navigation
    } = this.props;

    if (genresByNameLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      );
    }

    if (genresByNameError) {
      return (
        <Text style={styles.errorText}>{genresByNameError.message || ""}</Text>
      );
    }

    if (!Object.keys(genresByNameData).length > 0) return null;

    if (!genresByNameData) return null;

    if (genresByNameData.length !== 0) {
      return (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>Genres</Text>
          <View style={styles.resultsGroup}>
            {genresByNameData.map((genre, index) => (
              <GenreCardList
                key={index}
                genre={genre}
                onPress={() =>
                  navigation.replace("GenreScreen", {
                    genreId: genre.id
                  })
                }
              />
            ))}
          </View>
        </View>
      );
    }
  }

  render() {
    const { query } = this.state;
    const {
      booksByTitleLoading,
      authorsByNameLoading,
      genresByNameLoading
    } = this.props;
    // console.log(`book load ${booksByTitleLoading} author load ${authorsByNameLoading} genre load ${genresByNameLoading}`);
    return (
      <View style={styles.rootView}>
        <View style={styles.searchView}>
          <SearchBar
            containerStyle={styles.searchContainer}
            inputContainerStyle={styles.searchInputContainer}
            inputStyle={styles.searchInput}
            placeholder={"Type the book title, author name, genre..."}
            onChangeText={this.querySearch}
            onCancel={this.props.navigation.goBack}
            value={query}
            platform="android"
            autoCapitalize={"none"}
            returnKeyType={"search"}
          />
        </View>
        {!query ? (
          <KeyboardAvoidingView
            style={styles.suggestionsView}
            behavior="padding"
            enabled
          >
            <ScrollView contentContainerStyle={styles.scrollView}>
              <View style={styles.suggestionsContainer}>
                <Text style={styles.suggestionsTitle}>Books</Text>
                <View style={styles.suggestionsGroup}>
                  <SearchSuggestionChip
                    gradient={["#00C48C", "#7DDFC3"]}
                    text="Book 1"
                  />
                  <SearchSuggestionChip
                    gradient={["#00C48C", "#7DDFC3"]}
                    text="Book 2"
                  />
                  <SearchSuggestionChip
                    gradient={["#00C48C", "#7DDFC3"]}
                    text="Book 3"
                  />
                  <SearchSuggestionChip
                    gradient={["#00C48C", "#7DDFC3"]}
                    text="Book 4"
                  />
                  <SearchSuggestionChip
                    gradient={["#00C48C", "#7DDFC3"]}
                    text="Book 5"
                  />
                  <SearchSuggestionChip
                    gradient={["#00C48C", "#7DDFC3"]}
                    text="Book 6"
                  />
                  <SearchSuggestionChip
                    gradient={["#00C48C", "#7DDFC3"]}
                    text="Book 7"
                  />
                </View>
              </View>
              <View style={styles.suggestionsContainer}>
                <Text style={styles.suggestionsTitle}>Genres</Text>
                <View style={styles.suggestionsGroup}>
                  <SearchSuggestionChip
                    gradient={["#BE52F2", "#DBA5F5"]}
                    text="Genre 1"
                  />
                  <SearchSuggestionChip
                    gradient={["#BE52F2", "#DBA5F5"]}
                    text="Genre 2"
                  />
                  <SearchSuggestionChip
                    gradient={["#BE52F2", "#DBA5F5"]}
                    text="Genre 3"
                  />
                  <SearchSuggestionChip
                    gradient={["#BE52F2", "#DBA5F5"]}
                    text="Genre 4"
                  />
                  <SearchSuggestionChip
                    gradient={["#BE52F2", "#DBA5F5"]}
                    text="Genre 5"
                  />
                  <SearchSuggestionChip
                    gradient={["#BE52F2", "#DBA5F5"]}
                    text="Genre 6"
                  />
                  <SearchSuggestionChip
                    gradient={["#BE52F2", "#DBA5F5"]}
                    text="Genre 7"
                  />
                </View>
              </View>
              <View style={styles.suggestionsContainer}>
                <Text style={styles.suggestionsTitle}>Authors</Text>
                <View style={styles.suggestionsGroup}>
                  <SearchSuggestionChip
                    gradient={["#FF647C", "#FDAFBB"]}
                    text="Author 1 AUTHOR ONE  EEEE"
                  />
                  <SearchSuggestionChip
                    gradient={["#FF647C", "#FDAFBB"]}
                    text="Author 2"
                  />
                  <SearchSuggestionChip
                    gradient={["#FF647C", "#FDAFBB"]}
                    text="Au 3"
                  />
                  <SearchSuggestionChip
                    gradient={["#FF647C", "#FDAFBB"]}
                    text="Author Author Author 4"
                  />
                  <SearchSuggestionChip
                    gradient={["#FF647C", "#FDAFBB"]}
                    text="Author 5"
                  />
                  <SearchSuggestionChip
                    gradient={["#FF647C", "#FDAFBB"]}
                    text="Author 6"
                  />
                  <SearchSuggestionChip
                    gradient={["#FF647C", "#FDAFBB"]}
                    text="Author 7"
                  />
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        ) : (
          <KeyboardAvoidingView
            style={styles.resultsView}
            behavior="padding"
            enabled
          >
            <ScrollView contentContainerStyle={styles.scrollView}>
              {this.renderBooksByTitleResult()}
              {this.renderAuthorsByNameResult()}
              {this.renderGenresByNameResult()}
            </ScrollView>
          </KeyboardAvoidingView>
        )}
      </View>
    );
  }
}

SearchScreen.propTypes = {
  searchBooksByTitle: PropTypes.func.isRequired,
  resetSearchBooksByTitle: PropTypes.func.isRequired,
  searchAuthorsByName: PropTypes.func.isRequired,
  resetSearchAuthorsByName: PropTypes.func.isRequired,
  searchGenresByName: PropTypes.func.isRequired,
  resetSearchGenresByName: PropTypes.func.isRequired,
  booksByTitleData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  authorsByNameData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  genresByNameData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

SearchScreen.defaultProps = {
  searchBooksByTitle: () => {},
  resetSearchBooksByTitle: () => {},
  searchAuthorsByName: () => {},
  resetSearchAuthorsByName: () => {},
  searchGenresByName: () => {},
  resetSearchGenresByName: () => {},
  booksByTitleLoading: true,
  booksByTitleData: "",
  booksByTitleError: "",
  authorsByNameLoading: true,
  authorsByNameData: {},
  authorsByNameError: "",
  genresByNameLoading: true,
  genresByNameData: {},
  genresByNameError: ""
};

const mapStateToProps = state => {
  return {
    booksByTitleLoading: state.search.booksByTitleLoading,
    booksByTitleData: state.search.booksByTitleData,
    booksByTitleError: state.search.booksByTitleError,
    authorsByNameLoading: state.search.authorsByNameLoading,
    authorsByNameData: state.search.authorsByNameData,
    authorsByNameError: state.search.authorsByNameError,
    genresByNameLoading: state.search.genresByNameLoading,
    genresByNameData: state.search.genresByNameData,
    genresByNameError: state.search.genresByNameError
  };
};

const mapDispatchToProps = {
  searchBooksByTitle,
  resetSearchBooksByTitle,
  searchAuthorsByName,
  resetSearchAuthorsByName,
  searchGenresByName,
  resetSearchGenresByName
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchScreen);
