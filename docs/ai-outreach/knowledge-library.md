---
id: knowledge-library
title: Knowledge Library
sidebar_label: Knowledge Library
description: Build your knowledge base with documents that AI uses to generate contextually relevant content.
---

# Knowledge Library

The Knowledge Library is aiFetchly's intelligent document management system. Upload your documents (PDFs, Word files, HTML, and more) to create a knowledge base that powers AI-generated content, ensuring your outreach is contextually accurate and personalized.

## What is RAG?

**RAG** (Retrieval-Augmented Generation) is a technology that:

1. **Ingests** your documents and breaks them into smaller chunks
2. **Creates vector embeddings** that understand the semantic meaning of your content
3. **Retrieves relevant information** when generating content
4. **Enhances AI responses** with your specific knowledge

:::info Why RAG Matters

Traditional AI systems generate generic content. With RAG, aiFetchly's AI references YOUR documents, creating personalized, context-aware emails and marketing content.

:::

## Supported File Types

| Format | Extensions | Best For |
|--------|------------|----------|
| **PDF** | `.pdf` | Brochures, whitepapers, documentation |
| **Microsoft Word** | `.doc`, `.docx` | Proposals, contracts, product info |
| **Text** | `.txt` | Simple text files, notes |
| **Markdown** | `.md` | Technical documentation, README files |
| **HTML** | `.html`, `.htm` | Web content, articles |

## Uploading Documents

### Step 1: Navigate to Knowledge Library

1. Click **Knowledge** in the left navigation menu
2. You'll see the Knowledge Library interface

### Step 2: Upload Documents

**Method 1: Drag and Drop**

1. Drag files from your computer
2. Drop them onto the upload area
3. Visual feedback shows files being added

**Method 2: File Browser**

1. Click the **Upload** button (or the upload area)
2. Navigate to your files in the file browser
3. Select one or multiple documents
4. Click **Open** to upload

### Step 3: Processing

After upload, documents are automatically processed:

1. **Saving**: Files are saved to the database
2. **Chunking**: Documents are broken into smaller segments
3. **Embedding**: Vector embeddings are created for semantic search
4. **Status Update**: Processing status changes from **Pending** → **Processing** → **Completed**

:::tip Processing Time

Processing time depends on file size:
- Small files (< 1MB): 10-30 seconds
- Medium files (1-5MB): 30-60 seconds
- Large files (5-10MB): 1-3 minutes

:::

## Managing Documents

### Document List View

The Knowledge Library displays all your documents with:

| Column | Description |
|--------|-------------|
| **Name** | Document filename |
| **Title** | Document title (editable) |
| **Status** | Processing status (Pending/Processing/Completed/Error) |
| **Type** | File type (PDF, DOCX, etc.) |
| **Size** | File size |
| **Upload Date** | When the document was uploaded |
| **Actions** | View, download, delete, re-embed |

### Document Actions

| Action | Description |
|--------|-------------|
| **View** | Open document to view content |
| **Download** | Download original file to your computer |
| **Delete** | Remove document from knowledge base |
| **Re-embed** | Reprocess document with new embedding model |
| **View Logs** | See error details for failed documents |

### Search and Filter

- **Search by Name**: Filter documents by filename
- **Filter by Status**: Show only completed, processing, or failed documents
- **Filter by Type**: Show only specific file types

### Bulk Operations

- **Select Multiple**: Check boxes next to documents
- **Bulk Delete**: Remove multiple documents at once
- **Clear Selection**: Deselect all documents

## Understanding Processing Status

| Status | Color | Meaning | Action |
|--------|-------|---------|--------|
| **Pending** | Grey | Queued for processing | Wait for automatic processing |
| **Processing** | Blue | Currently being embedded | Wait for completion |
| **Completed** | Green | Ready to use in AI generation | Document is active |
| **Error** | Red | Processing failed | View logs, try re-embedding |

## Re-embedding Documents

If you change embedding models or need to reprocess a document:

1. Find the document in the list
2. Click **Re-embed** button
3. Document status changes to **Processing**
4. New embeddings are created with current model
5. Status updates to **Completed** when done

**Use Cases for Re-embedding:**
- Changed embedding model in settings
- Previous embedding failed partially
- Want to use updated chunking parameters

## Troubleshooting

### Document Status: "Error"

**Possible causes:**
- Corrupted file
- Unsupported file format
- File too large
- Encoding issues

**Solutions:**
1. **View Logs** to see specific error
2. **Try Re-embedding** the document
3. **Re-upload** the original file
4. **Convert file** to a different format (e.g., DOC → PDF)

### Slow Processing

**Possible causes:**
- Large file size
- High system load
- Network latency (for remote embedding)

**Solutions:**
1. Wait for processing to complete
2. Split large documents into smaller files
3. Close other applications to free resources

### Document Not Used in AI Content

**Possible causes:**
- Document not fully processed
- Document content not relevant to query
- RAG context not enabled

**Solutions:**
1. Verify document status is **Completed**
2. Ensure RAG context is enabled in AI Chat/Email Writer
3. Try searching for more specific content
4. Upload additional relevant documents

## Best Practices

### 1. Document Selection

**Upload documents that:**
- Describe your products or services in detail
- Explain your value proposition
- Contain case studies or success stories
- Include industry-specific terminology
- Provide competitive advantages

**Avoid:**
- Generic or outdated information
- Irrelevant content
- Very large files (> 10MB)
- Poorly formatted documents

### 2. Document Organization

**Naming Conventions:**
- Use descriptive names: `Product_Brochure_2024.pdf`
- Include version numbers: `Pricing_Guide_v2.docx`
- Add dates: `Case_Study_January_2024.pdf`

**Categorization:**
- Group related documents together
- Use consistent naming patterns
- Tag documents for easy filtering

### 3. Content Quality

**For Best Results:**
- Use well-formatted documents
- Include structured headings
- Provide specific details and examples
- Keep information up-to-date
- Use professional language

### 4. Regular Maintenance

**Keep Your Knowledge Base Healthy:**
- **Review regularly**: Remove outdated documents
- **Update content**: Re-upload when information changes
- **Monitor status**: Check for failed embeddings
- **Optimize size**: Split large documents when possible

## Integration with AI Features

The Knowledge Library integrates with:

### AI Email Writer

When creating AI-generated emails:

1. **Enable RAG Context** in the email writer
2. AI searches your Knowledge Library for relevant information
3. Retrieved content is used to personalize emails
4. Emails contain accurate, context-aware information

**Example:**
- You upload a product catalog PDF
- AI generates emails referencing specific products
- Each email mentions products relevant to the recipient

### AI Marketing Assistant

When chatting with the AI assistant:

1. **Toggle RAG Context** (📖 icon)
2. Ask questions about your business, products, or services
3. AI searches Knowledge Library for answers
4. Responses are based on YOUR documentation

**Example Questions:**
- "What are our key product features?"
- "How does our pricing compare to competitors?"
- "What's our refund policy?"
- "Generate a marketing email for Product X"

## Example Use Cases

### Use Case 1: Product Marketing

**Documents to Upload:**
- Product brochures
- Feature specifications
- Pricing guides
- Comparison charts
- Case studies

**Result:** AI generates detailed, accurate product emails.

### Use Case 2: Service Businesses

**Documents to Upload:**
- Service descriptions
- Process documentation
- Client testimonials
- Portfolio samples
- Pricing packages

**Result:** AI creates service-focused outreach with specific details.

### Use Case 3: Agency Outreach

**Documents to Upload:**
- Agency capabilities
- Portfolio pieces
- Case studies
- Team bios
- Service packages

**Result:** AI personalizes agency pitches to each prospect.

### Use Case 4: SaaS Companies

**Documents to Upload:**
- Feature documentation
- API guides
- Pricing tiers
- Onboarding materials
- Webinar transcripts

**Result:** AI generates technical yet accessible outreach.

## Technical Details

### How RAG Works

1. **Document Ingestion**:
   - Files are uploaded and saved to database
   - Metadata (name, type, size, date) is recorded

2. **Text Extraction**:
   - Text is extracted from different file formats
   - Formatting is preserved where possible

3. **Chunking**:
   - Documents are split into smaller segments (chunks)
   - Typical chunk size: 500-1000 characters
   - Overlap between chunks maintains context

4. **Embedding Creation**:
   - Each chunk is converted to a vector embedding
   - Embeddings capture semantic meaning
   - Stored in vector database for fast retrieval

5. **Semantic Search**:
   - When generating content, AI searches for relevant chunks
   - Similarity matching finds most relevant content
   - Retrieved chunks are included as context

6. **Content Generation**:
   - AI uses retrieved context + prompt
   - Generates personalized, accurate content
   - References your specific knowledge

### Storage and Performance

- **Storage**: Documents stored in local SQLite database
- **Vector Database**: Optimized for fast similarity search
- **Performance**: Millisecond retrieval for relevant content
- **Scalability**: Handles thousands of documents efficiently

## Security and Privacy

### Data Storage

- **Local Storage**: All documents stored locally on your machine
- **No Cloud Upload**: Original files remain on your computer
- **Encrypted**: Database can be encrypted for additional security

### Privacy Considerations

- **Your Knowledge**: Only you have access to your documents
- **AI Processing**: Embeddings created locally or on your servers
- **No Training Data**: Your documents aren't used to train public AI models

:::tip Confidential Information

The Knowledge Library is perfect for:
- Internal product documentation
- Confidential pricing information
- Proprietary business processes
- Client-specific information

:::

## Next Steps

Now that you've built your Knowledge Library:

- [Create AI-generated email campaigns](./ai-email-writer)
- [Use the AI Marketing Assistant](./ai-marketing-assistant)
- [Set up batch email sending](./batch-email-sending)

---

**Ready to build your knowledge base?** Start by uploading your product documentation, pricing guides, and marketing materials to power personalized AI outreach.
